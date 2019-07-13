import React from 'react'
import {
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles'

const StopButton = ({
  onPress,
} = this.props) =>
  <View style={{...style.row, justifyContent: 'flex-end'}}>
    <TouchableOpacity
      style={style.stopButton}
      onPress={onPress}
    >
      <View style={style.stopOuterRectangle}>
        <View style={style.stopInnerRectangle}>
        </View>
      </View>
    </TouchableOpacity>
  </View>

export default StopButton
