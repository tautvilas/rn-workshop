import React, { Component } from 'react';
import {
  Text,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity
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
        {uri: 'https://www.placecage.com/c/500/500'},
        {uri: 'https://www.placecage.com//500/500'},
      ]),
    };
  }

  pushFormScreen(data) {
    this.props.navigator.push({
      screen: 'MemeFormScreen'
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
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

export default HomeScreen;
