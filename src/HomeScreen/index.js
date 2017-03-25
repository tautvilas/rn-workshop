import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native';

import styles from './style';

class HomeScreen extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.uri !== r2.uri
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {uri: 'https://www.placecage.com/500/500'},
        {uri: 'https://www.placecage.com/700/500'},
        {uri: 'https://www.placecage.com/300/500'},
        {uri: 'https://www.placecage.com/1000/500'},
        {uri: 'https://www.placecage.com/850/500'},
        {uri: 'https://www.placecage.com/500/500'},
        {uri: 'https://www.placecage.com/700/500'},
        {uri: 'https://www.placecage.com/300/500'},
        {uri: 'https://www.placecage.com/1000/500'}
      ]),
    };
  }

  onImagePress(data) {
    this.props.navigator.push({
      screen: 'FormScreen',
      passProps: {
        imageData: data
      }
    });
  }

  renderListItem(rowData) {
    return (
      <TouchableOpacity onPress={this.onImagePress.bind(this, rowData)}>
        <Image style={styles.image} resizeMode={'cover'} source={rowData}/>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderListItem.bind(this)}
      />
    );
  }
}

export default HomeScreen;
