import React, { Component } from 'react';

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    //this.handleClick = this.handleClick.bind(this);
  }

  //Use the arrow function to avoid bind() on handleclick!
  handleClick = e => {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  };

  render() {
    const { clicked } = this.state;
    return (
      <div>
        <h1>{clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default BrokenClick;
