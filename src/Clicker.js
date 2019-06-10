import React, { Component } from 'react';

const Winner = () => {
  return <h1>YOU WIN</h1>;
};

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
  }

  generateNum = () => {
    const myNum = Math.floor(Math.random() * 10 + 1);
    this.setState({ num: myNum });
  };

  render() {
    const { num } = this.state;
    return (
      <div>
        <h1>Number is {num}</h1>
        {num === 7 && <Winner />}
        <button onClick={this.generateNum}>Random Number Generator</button>
      </div>
    );
  }
}

export default Clicker;
