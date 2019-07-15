import React from "react";
import {
  View,
  Text,
  Alert,
  Platform
} from 'react-native'
import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
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
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: undefined,
      currentTime: '00.00',
    }
  }

  prepareRecordingPath = (audioPath) => {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  }

  componentDidMount() {
    AudioRecorder.requestAuthorization().then((isAuthorised) => {
      this.setState({ hasPermission: isAuthorised });

      if (!isAuthorised) return;

      this.prepareRecordingPath(this.state.audioPath);

      AudioRecorder.onProgress = (data) => {
        let timeString = this.convertToTime(Math.floor(data.currentTime))
        if(this.state.isRecording && !this.state.isLocked) {
          timeString += '   Slide to cancel'
        }
        this.setState({currentTime: timeString});
      };

      AudioRecorder.onFinished = (data) => {
        if (Platform.OS === 'ios') {
          this._finishRecording(data.status === "OK", data.audioFileURL, data.audioFileSize);
        }
      };
    });
  }

  _finishRecording = (didSucceed, filePath, fileSize) => {
    this.setState({ finished: didSucceed });
  }

  onStopRecording = async () => {
    if (!this.state.isRecording) {
      console.warn('Can\'t stop, not recording!');
      return
    }

    this.setState({
      isStop: true,
      isRecording: false
    })

    try {
      const filePath = await AudioRecorder.stopRecording();

      if (Platform.OS === 'android') {
        this._finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  onPlayRecord = async () => {
    if (this.state.isRecording) {
      await this._stop();
    }

    setTimeout(() => {
      const sound = new Sound(this.state.audioPath, '', (error) => {
        if (error) {
          console.log('Failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
  }

  onStartRecording = async () => {
    if (this.state.isRecording) {
      console.warn('Already recording!');
      return;
    }

    if (!this.state.hasPermission) {
      console.warn('Can\'t record, no permission granted!');
      return;
    }

    if(this.state.stoppedRecording){
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({
      isRecording: true,
    });

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }

  scrollOverRecordButton = (isMovedToY) => {
    if(isMovedToY) {
      this.setState({
        isLocked: true,
      })
    } else {
      this.initState()
    }
  }

  initState = () => {
    this.setState({
      isRecording: false,
      isLocked: false,
      isStop: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      currentTime: '00.00',
    })
  }

  onSendRecord = () => {
    this.initState()
  }

  onRemoveRecord = () => {
    this.initState()
  }

  convertToTime = (second) => {
      let minutes = Math.floor(second / 60)
      let seconds = second - minutes * 60

      if (minutes < 10) {
        minutes = "0" + minutes
      }
      if (seconds < 10) {
        seconds = "0" + seconds
      }

      return minutes + ':' + seconds;
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
          ? <StopButton
              onPress={this.onStopRecording}
            />
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
            ? <RemoveButton
                onPress={this.onRemoveRecord}
              />
            : null
          }
          {
            isStop
            ? <PlayButton
                onPress={this.onPlayRecord}
              />
            : null
          }
          <MsgInputText
            isRecording={isRecording}
            isStop={isStop}
            placeholder={isRecording ? this.state.currentTime.toString() : ''}
          />
          {
            !isStop
            ? <RecordButton
                isRecording={isRecording}
                startRecording={this.onStartRecording}
                stopRecording={this.onStopRecording}
                scrollOverRecordButton={this.scrollOverRecordButton}
              />
            : <SendButton
                onPress={this.onSendRecord}
              />
          }
        </View>
      </Container>
    );
  }
}

export default HomeScreen