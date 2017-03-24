import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Image,
  Dimensions
} from 'react-native';

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
  renderRow(rowData) {
    return (
      <Image
        style={{height: 250, width: Dimensions.get('window').width}}
        resizeMode={'cover'}
        source={{uri: rowData.uri}}
      />
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
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
