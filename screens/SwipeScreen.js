import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { BOLIGER } from '../data/const';
import SwipeCard from '../components/SwipeCard';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

// Dette er hovedsiden (main page) i appen - her swiper lejeren igennem
// boligopslagene ét ad gangen, enten ved at trække kortet eller trykke på knapperne.
export default function SwipeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interesserede, setInteresserede] = useState([]); // boliger lejeren har sagt "ja tak" til

  const handleSwipeLeft = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSwipeRight = () => {
    setInteresserede((prev) => [...prev, BOLIGER[currentIndex]]);
    setCurrentIndex((prev) => prev + 1);
  };

  const currentBolig = BOLIGER[currentIndex];

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.heading}>Find din næste bolig</Text>

      <View style={GlobalStyle.cardArea}>
        {currentBolig ? (
          <SwipeCard
            key={currentBolig.id}
            bolig={currentBolig}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        ) : (
          <Text style={GlobalStyle.emptyText}>
            Ingen flere boliger lige nu - kom tilbage senere!
          </Text>
        )}
      </View>

      {currentBolig && (
        <View style={GlobalStyle.buttonRow}>
          <ButtonComponent title="Nej tak" type="secondary" onPress={handleSwipeLeft} />
          <ButtonComponent title="Interesseret" type="primary" onPress={handleSwipeRight} />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
