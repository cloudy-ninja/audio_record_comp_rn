import React, { Component } from "react";
import WaveForm from "react-native-audiowaveform";
import style from './styles'

export default class WaveformWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playAudio: false,
      stopAudio: true
    };
  }
  static propTypes = {
    ...WaveForm.propTypes
  };

  changestate = () => {
    this.setState({ playAudio: false});
  }

  render() {
    return (
      <WaveForm
        style={style.waveform}
        onPress={this.changestate}
        source={this.props.source}
        stop={this.state.stopAudio}
        play={this.state.playAudio}
        autoPlay={this.props.autoPlay}
        waveFormStyle={{
          waveColor: this.props.waveFormStyle.waveColor,
          scrubColor: this.props.waveFormStyle.scrubColor
        }}
      />
    );
  }
}