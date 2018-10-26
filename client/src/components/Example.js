import React, { Component } from 'react';

class Example extends Component {

    state = {
        counter: "oh shit it's different",
        somethingNew: 34
    };
  render() {
    return (
      <div className="ChuckTesta">
          {this.state.counter}
          <h1>Something else</h1>
      </div>
    );
  }
}

export default Example;
