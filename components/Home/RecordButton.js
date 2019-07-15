import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  PanResponder,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles'

import type {
  PanResponderInstance,
  GestureState,
} from '../../../../Libraries/Interaction/PanResponder';
import type {PressEvent} from '../../../../Libraries/Types/CoreEventTypes';


class RecordButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoved: false
    }
  }

  _handleStartShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user presses down on the circle?
    return true;
  };

  _handleMoveShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user moves a touch over the circle?
    return true;
  };

  _handlePanResponderGrant = (
    event: PressEvent,
    gestureState: GestureState,
  ) => {
    this.props.startRecording() // onPressIn
  };

  _handlePanResponderMove = (
    event: PressEvent,
    gestureState: GestureState) => {
    if(gestureState.dy < -60) {
      this.props.scrollOverRecordButton(true)
      this.setState({
        isMoved: true
      })
    }

    if(gestureState.dx < -50) {
      this.props.scrollOverRecordButton(false)
      this.setState({
        isMoved: true
      })
    }
  };

  _handlePanResponderEnd = (
    event: PressEvent,
    gestureState: GestureState) => {
    if(!this.state.isMoved) {
      this.props.stopRecording() // onPressOut
    }
  };

  _panResponder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
    onPanResponderGrant: this._handlePanResponderGrant,
    onPanResponderMove: this._handlePanResponderMove,
    onPanResponderRelease: this._handlePanResponderEnd,
  });

  render() {
    const {
      isRecording,
    } = this.props

    return (
      <View
        style={!isRecording ? style.recordButton : style.recordingButton}
        {...this._panResponder.panHandlers}
      >
        <Icon name="microphone" size={!isRecording ? 20 : 30} />
      </View>
    )
  }
}

export default RecordButton
