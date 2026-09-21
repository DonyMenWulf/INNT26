import { Pressable, Text } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

// Simpel genbrugelig knap-komponent
// props styrer tekst, funktion og om det er en "primary" eller "secondary" knap.
export default function ButtonComponent({ title, onPress, type }) {
  return (
    <Pressable
      style={({ pressed }) => [
        type === 'primary' ? GlobalStyle.primaryBtn : GlobalStyle.secondaryBtn,
        pressed && GlobalStyle.btnPressed,
      ]}
      onPress={onPress}
    >
      <Text style={type === 'primary' ? GlobalStyle.primaryBtnText : GlobalStyle.secondaryBtnText}>
        {title}
      </Text>
    </Pressable>
  );
}
