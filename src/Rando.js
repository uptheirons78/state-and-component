import React, { Component } from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.makeTimer(); //it updates the num State any 1000ms with a random number between 1 and 7 (maxNum prop defined in the Rando Component)
  }

  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }

  render() {
    return <h1>{this.state.num}</h1>;
  }
}

export default Rando;
