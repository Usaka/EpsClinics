import { StyleSheet } from 'react-native';

const containers = StyleSheet.create({
  fRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  fullView: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#d5e3f0',
  },
  card: {
    display: 'flex',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    height: '80%',
    margin: 20,
    paddingBottom: 200,
    backgroundColor: '#ffffff',
  },
  cardMini: {
    height: '50%',
    maxHeight: 300,
  },
  cardView: {
    display: 'flex',
    width: '75%',
    padding: 35,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  cardViewHospital: {
    display: 'flex',
    width: '75%',
    paddingBottom: 20,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  cardHospital: {
    borderBottomWidth: 1,
    borderBottomColor: '#c1c1c1',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#11111199',
  },
  input: {
    color: '#313170',
    marginTop: 5,
    marginBottom: 25,
    borderWidth: 1,
    borderTopColor: '#00000000',
    borderLeftColor: '#a1a1a1',
    borderRightColor: '#00000000',
    borderBottomColor: '#a1a1a1',
    paddingVertical: 0,
  },
  primaryBtn: {
    backgroundColor: '#0000ff',
    width: 125,
    borderRadius: 25,
    paddingVertical: 10,
  },
  primaryBtnBigger: {
    backgroundColor: '#0000ff',
    width: '75%',
    borderRadius: 25,
    paddingVertical: 10,
  },
  imageHospital: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  imageFull: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  circleBtn: {
    width: 80,
    height: 80,
    backgroundColor: '#00FFFF',
    borderRadius: 100,
  },
});

export default containers;
