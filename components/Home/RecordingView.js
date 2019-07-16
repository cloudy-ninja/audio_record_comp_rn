import React from 'react'
import {
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import style from './styles'

const RecordingView = () =>
  <View style={style.recordingView}>
    <Icon name="record" size={40} color={'#900'}/>
  </View>

export default RecordingView
