import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{height: 250, width: Dimensions.get('window').width}}
          resizeMode={'cover'}
          source={{uri: 'https://www.placecage.com/c/500/500'}}
        />
        <Image
          style={{height: 250, width: Dimensions.get('window').width}}
          resizeMode={'cover'}
          source={{uri: 'https://www.placecage.com/c/600/500'}}
        />
        <Image
          style={{height: 250, width: Dimensions.get('window').width}}
          resizeMode={'cover'}
          source={{uri: 'https://www.placecage.com/c/700/500'}}
        />
        <Image
          style={{height: 250, width: Dimensions.get('window').width}}
          resizeMode={'cover'}
          source={{uri: 'https://www.placecage.com/c/1000/500'}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default HomeScreen;
