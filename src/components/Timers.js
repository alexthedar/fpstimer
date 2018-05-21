import React, { Component } from 'react';
import Timer from './Timer/Timer'
import './Timer.css'

class Timers extends Component {
  state={
    totalFrames: 0
  }

  setTotalFrames = (e) => {
    console.log(e)
    // let fpm = this.props.fps*60;
    // let minutes = Math.floor( e / fpm )
    // let seconds = Math.floor(e%fpm / this.props.fps)
    // let frames = Math.floor(e%fpm%this.props.fps)

    var regexp = /^[0-9]*$/g;
    var result = regexp.test(e);
    if(result === true){
      this.setState({
        totalFrames: e,
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
        <Timer  value={Math.floor(this.state.totalFrames / (this.props.fps*60))} 
                setTotalFrames={this.setTotalFrames} 
                multiplier={(this.props.fps*60)} 
                type='minutes'/>&nbsp;:&nbsp;
        <Timer  value={Math.floor(this.state.totalFrames % (this.props.fps*60) / this.props.fps)} 
                setTotalFrames={this.setTotalFrames} 
                multiplier={this.props.fps} 
                type='seconds'/>&nbsp;:&nbsp; 
        <Timer  value={Math.floor(this.state.totalFrames % (this.props.fps*60) % this.props.fps)} 
                setTotalFrames={this.setTotalFrames} 
                multiplier={1} 
                type='frames'/>
          <div style={{marginTop: '10px', fontSize: '10px'}}>FPS: {this.props.fps}</div>
        <div>
          {warning}
        </div>
      </div>
    );
  }
}

export default Timers;


  // <Timer value={Math.floor(this.state.totalFrames / this.props.fps*60)} handleInput={this.handleInput} multiplier={(this.props.fps*60)} type='minutes'/>&nbsp;:&nbsp;
  // <Timer value={Math.floor(this.state.totalFrames % this.props.fps*60 / this.props.fps)} handleInput={this.handleInput} multiplier={this.props.fps} type='seconds'/>&nbsp;:&nbsp; 
  // <Timer value={Math.floor(this.state.totalFrames % this.props.fps*60 % this.props.fps)} handleInput={this.handleInput} multiplier={1} type='frames'/>

// const Timer = (props) => {
//   console.log(props)
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <input className='inputs fontStuff' value={props.value} onChange={props.handleInput} />
//     </form>
//   );
// };