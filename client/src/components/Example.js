import React, {Component} from 'react';

class Example extends Component {

    state = {
        counter: "oh shit it's different",
        somethingNew: 34
    };

    render() {
        return (
            <div>
                <h1>
                    Here I am, I'm merge {this.state.counter}
                </h1>
            </div>
        );
    }
}

export default Example;
