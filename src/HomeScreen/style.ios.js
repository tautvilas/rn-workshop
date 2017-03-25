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
  }
});