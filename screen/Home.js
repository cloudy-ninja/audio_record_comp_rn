import React from "react";
import {
  View,
  Text
} from 'react-native'
import {
  style,
  Container,
  MsgInputText,
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View style={style.row}>
          <MsgInputText
            placeholder={'audioRecord'}
          />
        </View>
      </Container>
    );
  }
}

export default HomeScreen