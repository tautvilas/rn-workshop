import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/HomeScreen';
import FormScreen from './src/FormScreen';
import CameraScreen from './src/CameraScreen';

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('FormScreen', () => FormScreen);
Navigation.registerComponent('CameraScreen', () => CameraScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'HomeScreen',
    title: 'Meme Builder'
  }
});