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
  RecordingView,
  LockButton,
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
    }
  }

  render() {
    const { isRecording } = this.state

    return (
      <Container>
        {
          isRecording
          ? <LockButton />
          : null
        }
        <View style={style.row}>
          {
            isRecording
            ? <RecordingView />
            : null
          }
          <MsgInputText
            isRecording={isRecording}
          />
          <RecordButton
            isRecording={isRecording}
          />
        </View>
      </Container>
    );
  }
}

export default HomeScreen