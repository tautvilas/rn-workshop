import React, { Component } from 'react';
import {
  Text,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './style';

class HomeScreen extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.uri !== r2.uri});
    this.state = {
      dataSource: ds.cloneWithRows([
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/750/500'},
        {uri: 'https://www.placecage.com//800/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
      ]),
    };
  }

  pushFormScreen(data) {
    this.props.navigator.push({
      screen: 'MemeFormScreen',
      passProps: {
        image: data
      }
    });
  };

  pushCameraScreen() {
    this.props.navigator.push({
      screen: 'CameraScreen'
    });
  };

  renderRow(rowData) {
    return (
      <TouchableOpacity onPress={this.pushFormScreen.bind(this, rowData)}>
        <Image
          style={{height: 250, width: Dimensions.get('window').width}}
          resizeMode={'cover'}
          source={{uri: rowData.uri}}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        <TouchableOpacity onPress={this.pushCameraScreen.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
