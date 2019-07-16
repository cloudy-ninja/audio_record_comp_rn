import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles'

const RemoveButton =({
  onPress,
} = this.props) =>
  <TouchableOpacity
    onPress={onPress}
  >
    <Icon name="trash-o" size={25} />
  </TouchableOpacity>

export default RemoveButton
