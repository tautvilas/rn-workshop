import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

import styles from './style';

class FormScreen extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  forwardValueToScreen(value) {
    this.props.onInput(value)
  }
  render() {
    return (
      <View style={styles.textInputWrapper}>
        <Text>{this.props.inputHeader}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.forwardValueToScreen.bind(this)}
          value={this.state.memeHeader}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}

export default FormScreen;
