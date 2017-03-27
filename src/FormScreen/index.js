import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

import MemeInput from './input';
import styles from './style';

class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memeFooter: '',
      memeHeader: '',
      textColor: 'white'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MemeInput
          inputHeader={'Meme header'}
          placeholder={'Enter meme header'}
          onInput={(value) => this.setState({memeHeader: value})} />
        <MemeInput
          inputHeader={'Meme footer'}
          placeholder={'Enter meme footer'}
          onInput={(value) => this.setState({memeFooter: value})}
        />
        <MemeInput
          inputHeader={'Text color'}
          placeholder={'Enter meme text color'}
          onInput={(value) => this.setState({textColor: value})}
        />
        <View style={styles.imageWrapper}>
          <Image source={this.props.imageData} style={styles.image} />
          <View style={styles.textsWrapper}>
            <Text style={[styles.memeText, styles.headerText, {color: this.state.textColor.toLowerCase()}]}>
              {this.state.memeHeader.toUpperCase()}
            </Text>
          </View>
          <View style={styles.textsWrapper2}>
            <Text style={[styles.memeText, styles.footerText, {color: this.state.textColor.toLowerCase()}]}>
              {this.state.memeFooter.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FormScreen;
