import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import style from './style';

class ReactComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentWillMount() {}

  render() {
    return (
      <View style={style.container}>
        <Text>Hello world</Text>
      </View>
    );
  }
}

export default ReactComp;
