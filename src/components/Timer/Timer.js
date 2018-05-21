import React, { Component } from 'react';

class Timer extends Component {
  state={
    value: this.props.value
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
    this.setState({
      value: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <form className='forms' onSubmit={this.handleSubmit}>
        <input className='inputs fontStuff' value={this.state.value} onChange={this.handleChange} ref={el => this.element = el}/>
      </form>
    );
  }
}

export default Timer;




// const Input = (props) => {
//   console.log(props)
//   return (
//     <React.Fragment>
//         
//     </React.Fragment>
//   );
// };

