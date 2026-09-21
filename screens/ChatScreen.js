import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, TextInput, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import { CHAT_MESSAGES } from '../data/const';
import { GlobalStyle } from '../styles/GlobalStyle';

// Besked-side - viser samtalen for den bolig, man trykkede ind på
// "Interesseret"-listen. `route.params` kommer fra navigation.navigate i MatchesScreen.js

export default function ChatScreen({ route }) {
  const { matchId, address } = route.params;
  const [messages, setMessages] = useState(CHAT_MESSAGES[matchId] || []);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') {
      return;
    }
    const message = {
      id: Date.now().toString(),
      sender: 'me',
      text: newMessage,
    };
    setMessages((prev) => [...prev, message]);
    setNewMessage('');
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.heading}>{address}</Text>

      <FlatList
        style={GlobalStyle.chatList}
        data={messages}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={GlobalStyle.emptyText}>Ingen beskeder endnu - skriv den første!</Text>
        }
        renderItem={({ item }) => (
          <View style={item.sender === 'me' ? GlobalStyle.myBubbleContainer : GlobalStyle.theirBubbleContainer}>
            <View style={item.sender === 'me' ? GlobalStyle.myBubble : GlobalStyle.theirBubble}>
              <Text style={item.sender === 'me' ? GlobalStyle.myBubbleText : GlobalStyle.theirBubbleText}>
                {item.text}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={GlobalStyle.chatInputRow}>
        <TextInput
          style={GlobalStyle.chatInput}
          placeholder="Skriv en besked..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <ButtonComponent title="Send" type="primary" onPress={handleSend} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
