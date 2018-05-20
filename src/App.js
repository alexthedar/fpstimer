import React, { Component } from 'react';
import './App.css';
import Timers from './components/Timers';

class App extends Component {
  state={
    fps: 24,
    initialFrames: 0
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-intro">
          <Timers fps={this.state.fps} initialFrames={this.state.initialFrames} />
        </div>
      </div>
    );
  }
}

export default App;
