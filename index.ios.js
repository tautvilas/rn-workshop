import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/HomeScreen';
import FormScreen from './src/FormScreen';

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('FormScreen', () => FormScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'HomeScreen',
    title: 'Meme Builder'
  }
});