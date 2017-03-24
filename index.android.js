import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/HomeScreen';
import FormScreen from './src/FormScreen';

Navigation.registerComponent('react-native-navigation-bootstrap', () => HomeScreen);
Navigation.registerComponent('MemeFormScreen', () => FormScreen);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-navigation-bootstrap',
    title: 'Meme Builder'
  }
});
