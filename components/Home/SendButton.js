import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './styles'

const SendButton =({
  onPress,
} = this.props) =>
  <TouchableOpacity
    style={style.recordButton}
    onPress={onPress}
  >
    <Icon name="send" size={20} />
  </TouchableOpacity>

export default SendButton
