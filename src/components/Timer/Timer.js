import React, { Component } from 'react';

class Timer extends Component {
  state={

  }
  render() {
    // let fpm = this.props.fps*60;
    // let minutes = Math.floor( e.target.value / fpm )
    // let seconds = Math.floor(e.target.value%fpm / this.props.fps)
    // let frames = Math.floor(e.target.value%fpm%this.props.fps)

    return (
      <React.Fragment>
        <input className='inputs fontStuff' value={this.props.totalFrames} onChange={this.props.handleInput} />
      </React.Fragment>
    );
  }
}

export default Timer;