import React, { Component } from 'react';

class Game extends Component {
  /*

    If a Component is Stateless it is possible to omit the constructor() func
    Instead a Component with State needs it
    Never manipulate State directly
    Use this.setState(), but never in the constructor()

  */
  constructor(props) {
    super(props); //it "registers" a class as a Component

    //state is a JS Obj and you need to initialize it (it's different from Props)
    this.state = {
      score: 0,
      gameOver: false
    };
  }

  render() {
    const { score } = this.state; //ES6 Obj Destructuring of: this.state.score
    return <h1>YOUR SCORE IS: {score}</h1>;
  }
}

export default Game;
