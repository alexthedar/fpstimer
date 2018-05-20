import React, { Component } from 'react';

class Timer extends Component {
  state={

  }
  render() {
    return (
      <React.Fragment>
        <input className='inputs fontStuff' value={this.props.totalFrames} onChange={this.props.handleInput} />
      </React.Fragment>
    );
  }
}

export default Timer;