import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/HomeScreen';
import FormScreen from './src/FormScreen';
import CameraScreen from './src/CameraScreen';

Navigation.registerComponent('react-native-navigation-bootstrap', () => HomeScreen);
Navigation.registerComponent('MemeFormScreen', () => FormScreen);
Navigation.registerComponent('CameraScreen', () => CameraScreen);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-navigation-bootstrap',
    title: 'Meme Builder'
  }
});
