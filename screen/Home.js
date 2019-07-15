import React from "react";
import {
  View,
  Text,
  Alert,
} from 'react-native'
import {
  style,
  Container,
  MsgInputText,
  RecordButton,
  RecordingView,
  LockButton,
  StopButton,
  RemoveButton,
  PlayButton,
  SendButton
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
      isLocked: false,
      isStop: false,
    }
  }

  onRecordPressOut = () => {
    if(this.state.isLocked) {
      // continue to recording

    } else {
      // stop recording

    }
  }

  onRecordLongPress = () => {
    this.setState({
      isRecording: true,
    })
  }

  onSend = () => {
    this.setState({
      isStop: false,
    })
  }

  render() {
    const {
      isRecording,
      isLocked,
      isStop,
    } = this.state

    return (
      <Container>
        {
          isRecording && isLocked
          ? <StopButton />
          : null
        }
        {
          isRecording && !isLocked
          ? <LockButton />
          : null
        }
        <View style={style.row}>
          {
            isRecording
            ? <RecordingView />
            : null
          }
          {
            isStop
            ? <RemoveButton />
            : null
          }
          {
            isStop
            ? <PlayButton />
            : null
          }
          <MsgInputText
            isRecording={isRecording}
            isStop={isStop}
          />
          {
            !isStop
            ? <RecordButton
                isRecording={isRecording}
                onLongPress={this.onRecordLongPress}
                onPressOut={this.onRecordPressOut}
              />
            : <SendButton
                onPress={this.onSend}
              />
          }
        </View>
      </Container>
    );
  }
}

export default HomeScreen