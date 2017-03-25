import {
  StyleSheet,
  PixelRatio
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray'
  },
  textInputWrapper: {
    marginTop: 10,
    borderBottomWidth: 1
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  imageWrapper: {
    marginTop: 25,
    alignItems: 'center'
  },
  memeText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    textAlign: 'center',
    left: 0,
    right: 0
  },
  headerText: {
    top: 15
  },
  footerText: {
    bottom: 15
  }
});