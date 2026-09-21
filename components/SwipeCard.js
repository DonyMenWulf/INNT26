import { useRef } from 'react';
import { Animated, PanResponder, Text, View, Image, Dimensions } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

/*
  OBS - teknik der IKKE er fra øvelsestimerne:
  Denne komponent bruger React Natives indbyggede Animated API og PanResponder
  til at lave det "rigtige" drag-swipe (som i Tinder/Hinge). Det er ikke noget,
  vi har lavet i 01-04 øvelserne, men det er en del af selve React Native
  (ikke et eksternt bibliotek), så der er ikke installeret noget ekstra for at
  få det til at virke. Se rapportens afsnit om egne refleksioner for en kort
  forklaring af, hvordan det virker.
*/

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25; // hvor langt man skal trække, før det tæller som et swipe
const SWIPE_OUT_DURATION = 250;

export default function SwipeCard({ bolig, onSwipeLeft, onSwipeRight }) {
  // position holder styr på, hvor langt kortet er trukket væk fra midten (x og y)
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      // Start med at reagere på berøring med det samme
      onStartShouldSetPanResponder: () => true,

      // Mens man trækker kortet, opdaterer vi position løbende
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },

      // Når man slipper kortet, afgør vi om det var et swipe eller ej
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right'); // interesseret
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left'); // nej tak
        } else {
          resetPosition(); // for lidt trukket - kortet flyver tilbage til midten
        }
      },
    })
  ).current;

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH * 1.5 : -SCREEN_WIDTH * 1.5;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => {
      position.setValue({ x: 0, y: 0 });
      direction === 'right' ? onSwipeRight() : onSwipeLeft();
    });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  // Kortet roterer lidt, alt efter hvor langt til siden det trækkes
  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  // "INTERESSERET"/"NEJ TAK" labels toner gradvist frem
  const likeOpacity = position.x.interpolate({
    inputRange: [0, SWIPE_THRESHOLD],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = position.x.interpolate({
    inputRange: [-SWIPE_THRESHOLD, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const cardStyle = {
    transform: [{ translateX: position.x }, { translateY: position.y }, { rotate }],
  };

  return (
    <Animated.View style={[GlobalStyle.card, cardStyle]} {...panResponder.panHandlers}>
      <Animated.View style={[GlobalStyle.likeLabel, { opacity: likeOpacity }]}>
        <Text style={GlobalStyle.likeLabelText}>INTERESSERET</Text>
      </Animated.View>
      <Animated.View style={[GlobalStyle.nopeLabel, { opacity: nopeOpacity }]}>
        <Text style={GlobalStyle.nopeLabelText}>NEJ TAK</Text>
      </Animated.View>

      <Image source={{ uri: bolig.imageUrl }} style={GlobalStyle.cardImage} />

      <View style={GlobalStyle.cardInfo}>
        <Text style={GlobalStyle.cardTitle}>{bolig.address}</Text>
        <Text style={GlobalStyle.cardSubtitle}>{bolig.city}</Text>
        <Text style={GlobalStyle.cardDetails}>
          {bolig.size} m² · {bolig.rooms} værelser · {bolig.price} kr/md
        </Text>
        <Text style={GlobalStyle.cardDescription}>{bolig.description}</Text>
      </View>
    </Animated.View>
  );
}
