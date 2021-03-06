import React, { Component } from 'react';
import './App.css';
import Timers from './components/Timers';

class App extends Component {
  state={
    fps: 24,
    initialFrames: 0
  }

  changeFPS = (e) => {
    var value = e.target.value;
    var regexp = /^[0-9]*$/g;
    var result = regexp.test(value);
    if(result === true && value < 1){ value=1}
    if(result === true){
      this.setState({
        fps: value,
      })
    } 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{marginTop: '10px', fontSize: '20px', color: 'grey'}}>
            FPS: <input className='inputs fontStuff inputBorder' value={this.state.fps} onChange={this.changeFPS} />
          </div>
        </header>
        <div className="App-intro">
          <Timers fps={this.state.fps} initialFrames={this.state.initialFrames} />
        </div>
      </div>
    );
  }
}

export default App;
