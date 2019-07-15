import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles'

const RecordButton =({
  onPress,
  onLongPress,
  isRecording,
  onPressIn,
  onPressOut,
} = this.props) =>
  <TouchableOpacity
    style={!isRecording ? style.recordButton : style.recordingButton}
    onPress={onPress}
    onLongPress={onLongPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <Icon name="microphone" size={!isRecording ? 20 : 30} />
  </TouchableOpacity>

export default RecordButton
