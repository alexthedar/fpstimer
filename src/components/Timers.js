import React, { Component } from 'react';
import Timer from './Timer/Timer'
import './Timer.css'

class Timers extends Component {
  state={
    totalFrames: 0
  }

  handleInput = (e) => {
    let fpm = this.props.fps*60;
    let minutes = Math.floor( e.target.value / fpm )
    let seconds = Math.floor(e.target.value%fpm / this.props.fps)
    let frames = Math.floor(e.target.value%fpm%this.props.fps)

    var regexp = /^[0-9]*$/g;
    var result = regexp.test(e.target.value);
    if(result === true){
      this.setState({
        totalFrames: e.target.value,
        lettersEntered: false
      })
    } else {
      this.setState({
        lettersEntered: true
      })
    }
  } 

  render() {
    let warning = this.state.lettersEntered === true ? "Only positive integers may be entered" : null;
    return (
      <div className='fontStuff'>
        <Timer totalFrames={this.state.totalFrames} handleInput={this.handleInput} type='minutes'/>&nbsp;:&nbsp;
        <Timer totalFrames={this.state.totalFrames} handleInput={this.handleInput} type='seconds'/>&nbsp;:&nbsp; 
        <Timer totalFrames={this.state.totalFrames} handleInput={this.handleInput} type='frames'/>
        <div>
          {warning}
        </div>
      </div>
    );
  }
}

export default Timers;
