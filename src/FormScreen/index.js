import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import styles from './style';

class ReactComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text>Image header</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={(imageHeader) => this.setState({imageHeader})}
            value={this.state.text}
          />
        </View>
        <View style={styles.input}>
          <Text>Image footer</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={(imageFooter) => this.setState({imageFooter})}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

export default ReactComp;
