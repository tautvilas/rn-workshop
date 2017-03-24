import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

import styles from './style';

class ReactComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageHeader: '',
      imageFooter: ''
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
        <View style={styles.imageContainer}>
          <Image
            style={{height: 250, width: 250}}
            resizeMode={'cover'}
            source={{uri: this.props.image.uri}}
          />
          <Text style={[styles.memeText, styles.headerText]}>{this.state.imageHeader.toUpperCase()}</Text>
          <Text style={[styles.memeText, styles.footerText]}>{this.state.imageFooter}</Text>
        </View>
      </View>
    );
  }
}

export default ReactComp;
