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
} = this.props) =>
  <TextInput
    autoCapitalize='none'
    style={style.msgInputText}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    placeholderTextColor={constants.Colors.grayLight}
  />

export default MsgInputText