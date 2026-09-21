import { StyleSheet } from 'react-native';

// Samlet stylesheet for hele appen
export const GlobalStyle = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 60,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  // SwipeScreen - selve kort-området
  cardArea: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    paddingHorizontal: 20,
  },

  // SwipeCard
  card: {
    width: '100%',
    height: '85%',
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '60%',
  },
  cardInfo: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 6,
  },
  cardDetails: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: '#444',
  },

  // "INTERESSERET" / "NEJ TAK" labels der toner frem under swipe
  // Bemærk: swipe mod venstre = interesseret, swipe mod højre = nej tak
  interesseretLabel: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 10,
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 6,
    padding: 6,
    transform: [{ rotate: '15deg' }],
  },
  interesseretLabelText: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nejTakLabel: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 6,
    padding: 6,
    transform: [{ rotate: '-15deg' }],
  },
  nejTakLabelText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // MatchesScreen - listen over boliger man har swipet interesseret på
  matchList: {
    width: '90%',
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  matchImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  matchInfo: {
    flex: 1,
  },
  matchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchSubtitle: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 4,
  },
  matchDetails: {
    fontSize: 13,
    fontWeight: '600',
  },

  // ChatScreen - beskeder mellem lejer og udlejer
  chatList: {
    width: '90%',
    flex: 1,
  },
  myBubbleContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  theirBubbleContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  myBubble: {
    backgroundColor: '#2E86AB',
    borderRadius: 16,
    borderBottomRightRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    maxWidth: '80%',
  },
  theirBubble: {
    backgroundColor: '#E5E5EA',
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    maxWidth: '80%',
  },
  myBubbleText: {
    color: 'white',
    fontSize: 14,
  },
  theirBubbleText: {
    color: 'black',
    fontSize: 14,
  },
  chatInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    marginBottom: 20,
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
  },

  // Knapper under kortet
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  primaryBtn: {
    backgroundColor: '#2E86AB',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  primaryBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryBtn: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderWidth: 2,
    borderColor: '#2E86AB',
  },
  secondaryBtnText: {
    color: '#2E86AB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnPressed: {
    opacity: 0.7,
  },
});
