import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  buttonWrapper: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#2b71e2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '200'
  }
});