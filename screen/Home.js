import React from "react";
import {
  View,
  Text
} from 'react-native'
import {
  style,
  Container,
  MsgInputText,
  RecordButton,
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
            isRecording={false}
          />
          <RecordButton
            isRecording={false}
          />
        </View>
      </Container>
    );
  }
}

export default HomeScreen