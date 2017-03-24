import {Navigation} from 'react-native-navigation';
import {HomeScreen} from './src/HomeScreen';

Navigation.registerComponent('react-native-navigation-bootstrap', () => HomeScreen);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-navigation-bootstrap',
    title: 'Navigation Bootstrap'
  }
});
