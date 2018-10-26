import React, { Component } from 'react';

class Example extends Component {

    state = {
        counter: 'Evil merge guy mcgee'
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
