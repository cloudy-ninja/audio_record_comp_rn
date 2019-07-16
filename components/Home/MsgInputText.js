import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import style from './styles'
import WaveformWrapper from './WaveformWrapper'
import constants from '../../constants';

const MsgInputText = ({
  placeholder,
  value,
  onChangeText,
  isRecording,
  isStop,
  isLocked,
  recordingTime,
  cancelRecording,
  isPlaying
} = this.props) =>
  <View
    style={
      !isRecording
        ? !isStop
          ? style.msgInputText
          : !isPlaying
            ? {...style.msgInputText, width: '65%'}
            : {...style.msgInputText, width: '65%', borderWidth: 0}
        : {...style.msgInputText, width: '70%'}
    }
  >
    {
      !isPlaying
        ? !isRecording
            ? <TextInput
                autoCapitalize='none'
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={constants.Colors.grayLight}
              />
            : !isLocked
              ? <View style={style.cancelContainer}>
                  <Text>{recordingTime}</Text>
                  <Text>{'Slide to cancel'}</Text>
                </View>
              : <View style={style.cancelContainer}>
                  <Text style={style.cancelButtonText}>{recordingTime}</Text>
                  <TouchableOpacity
                    onPress={cancelRecording}
                  >
                    <Text style={style.cancelButtonText}>{'Cancel'}</Text>
                  </TouchableOpacity>
                </View>
        : <WaveformWrapper
          autoPlay={false}
          style={style.waveform}
          waveFormStyle={{ waveColor: "lightsteelblue", scrubColor: "white" }}
          source={require("./audio/wildbot.mp3")}
        />
    }
  </View>


export default MsgInputText