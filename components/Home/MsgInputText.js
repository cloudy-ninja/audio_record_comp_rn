import React from 'react'
import {
  View,
  TextInput,
} from 'react-native'
import style from './styles'
import constants from '../../constants';

const MsgInputText = ({
  placeholder,
  value,
  onChangeText,
  isRecording,
  isStop,
} = this.props) =>
  <TextInput
    autoCapitalize='none'
    style={
      !isRecording
        ? !isStop
          ? style.msgInputText
          : {...style.msgInputText, width: '65%'}
        : {...style.msgInputText, width: '70%'}
    }
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    placeholderTextColor={constants.Colors.grayLight}
  />

export default MsgInputText