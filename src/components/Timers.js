import React, { Component } from 'react';
import Timer from './Timer/Timer'
import './Timer.css'

class Timers extends Component {
  state={
    totalFrames: 0
  }

  setTotalFrames = (e) => {
    var regexp = /^[0-9]*$/g;
    var result = regexp.test(e);
    if(result === true){
      this.setState({
        totalFrames: e,
        lettersEntered: false
      })
    } else {
      this.setState({
        totalFrames: 0,
        lettersEntered: true
      })
    }
  } 


  render() {
    let warning = this.state.lettersEntered === true ? "Only positive integers may be entered" : null;
    return (
      <div className='fontStuff'>
        <Timer  value={Math.floor(this.state.totalFrames / (this.props.fps*60))} 
                setTotalFrames={this.setTotalFrames} 
                multiplier={(this.props.fps*60)} 
                type='Minutes'/>&nbsp;:&nbsp;
        <Timer  value={Math.floor(this.state.totalFrames % (this.props.fps*60) / this.props.fps)} 
                setTotalFrames={this.setTotalFrames} 
                multiplier={this.props.fps} 
                type='Seconds'/>&nbsp;:&nbsp; 
        <Timer  value={Math.floor(this.state.totalFrames % (this.props.fps*60) % this.props.fps)} 
                setTotalFrames={this.setTotalFrames} 
                multiplier={1} 
                type='Frames'/>
        <div>
          {warning}
        </div>
      </div>
    );
  }
}

export default Timers;

