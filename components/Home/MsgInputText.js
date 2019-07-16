import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import style from './styles'
import constants from '../../constants';

const MsgInputText = ({
  placeholder,
  value,
  onChangeText,
  isRecording,
  isStop,
  isLocked,
  recordingTime,
} = this.props) =>
  <View
    style={
      !isRecording
        ? !isStop
          ? style.msgInputText
          : {...style.msgInputText, width: '65%'}
        : {...style.msgInputText, width: '70%'}
    }
  >
    {
      !isRecording
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
              <TouchableOpacity>
                <Text style={style.cancelButtonText}>{'Cancel'}</Text>
              </TouchableOpacity>
            </View>
    }
  </View>


export default MsgInputText