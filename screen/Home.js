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
  StopButton,
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
      isStop: false,
    }
  }

  render() {
    const {
      isRecording,
      isStop,
    } = this.state

    return (
      <Container>
        {
          isStop
          ? <StopButton />
          : null
        }
        {
          isRecording && !isStop
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