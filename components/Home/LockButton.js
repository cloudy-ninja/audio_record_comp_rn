
import React from 'react'
import {
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles'

const LockButton = () =>
  <View style={{...style.row, justifyContent: 'flex-end'}}>
    <View style={style.lockButton}>
      <Icon name="unlock" size={30} />
      <Icon name="angle-up" size={35} />
    </View>
  </View>

export default LockButton