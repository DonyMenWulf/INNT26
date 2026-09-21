import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { MATCHES } from '../data/const';
import { GlobalStyle } from '../styles/GlobalStyle';

// Denne side viser en liste over de boliger, man allerede har swipet "interesseret" på.
// Ligesom i 03_Lister-øvelsen bruger vi FlatList til at vise listen.
// Tryk på en bolig for at åbne samtalen med udlejeren (se App.js - Stack Navigator, ligesom i 02_Navigation Del 3).
export default function MatchesScreen({ navigation }) {
  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.heading}>Dine matches</Text>

      <FlatList
        style={GlobalStyle.matchList}
        data={MATCHES}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={GlobalStyle.emptyText}>
            Du har ikke swipet interesseret på nogen boliger endnu.
          </Text>
        }
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [GlobalStyle.matchItem, pressed && GlobalStyle.btnPressed]}
            onPress={() => navigation.navigate('Chat', { matchId: item.id, address: item.address })}
          >
            <Image source={{ uri: item.imageUrl }} style={GlobalStyle.matchImage} />
            <View style={GlobalStyle.matchInfo}>
              <Text style={GlobalStyle.matchTitle}>{item.address}</Text>
              <Text style={GlobalStyle.matchSubtitle}>{item.city}</Text>
              <Text style={GlobalStyle.matchDetails}>
                {item.size} m² · {item.rooms} værelser · {item.price} kr/md
              </Text>
            </View>
          </Pressable>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}
