import React from 'react'
import {
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles'

const PlayButton =({
  onPress,
} = this.props) =>
  <TouchableOpacity
    style={style.playButton}
    onPress={onPress}
  >
    <Icon name="play" size={15} />
  </TouchableOpacity>

export default PlayButton
