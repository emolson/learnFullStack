import React, { Component } from 'react';

class Example extends Component {

    state = {
        counter: 0
    };
  render() {
    return (
      <div>
          {this.state.counter}
      </div>
    );
  }
}

export default Example;
