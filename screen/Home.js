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
  RemoveButton,
  PlayButton,
  SendButton
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
      isStop: false,
      isDone: false,
    }
  }

  setIsRecording = () => {
    this.setState({
      isRecording: true,
    })
  }

  render() {
    const {
      isRecording,
      isStop,
      isDone,
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
          {
            isDone
            ? <RemoveButton />
            : null
          }
          {
            isDone
            ? <PlayButton />
            : null
          }
          <MsgInputText
            isRecording={isRecording}
            isDone={isDone}
          />
          {
            !isDone
            ? <RecordButton
                isRecording={isRecording}
                onLongPress={this.setIsRecording}
              />
            : <SendButton />
          }
        </View>
      </Container>
    );
  }
}

export default HomeScreen