import React, { Component } from 'react';

class Timer extends Component {
  state={
    value: this.props.value,
    error: false
  }

  componentWillReceiveProps(nextProps){
    if(this.props.value !== nextProps.value){
      this.setState({
        value: nextProps.value
      })     
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setTotalFrames(this.state.value*this.props.multiplier)
  }
  
  handleChange = (e) => {
    var regexp = /^[0-9]*$/g;
    var result = regexp.test(e.target.value);
    if(result===true){
      this.setState({
        value: e.target.value,
        error: false
      })
    } else {
      this.setState({
        value: e.target.value,
        error: true
      })
    }
  }

  render() {
    return (
      <form className='forms' onSubmit={this.handleSubmit}>
        <div style={{ fontSize: '12px'}}>
          <label>{this.props.type}</label>
        </div>
        <input  className={this.state.error === true? 'inputs fontStuff inputError' : 'inputs fontStuff inputBorder'} 
                value={this.state.value} 
                onChange={this.handleChange} 
                ref={el => this.element = el}/>
      </form>
    );
  }
}

export default Timer;

