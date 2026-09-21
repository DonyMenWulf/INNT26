import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SwipeScreen from './screens/SwipeScreen';
import MatchesScreen from './screens/MatchesScreen';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// "Interesseret"-fanen har sin egen Stack Navigator, så man kan navigere fra
// listen af matches ind til en samtale, ChatScreen er derfor IKKE en selvstændig fane, man kan trykke direkte ind på.
function InteresseretStack() {
  return (
    <Stack.Navigator initialRouteName="Matches">
      <Stack.Screen name="Matches" component={MatchesScreen} options={{ title: 'Dine matches' }} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Swipe" component={SwipeScreen} />
        <Tab.Screen
          name="Interesseret"
          component={InteresseretStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
