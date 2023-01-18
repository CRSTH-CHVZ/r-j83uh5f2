import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    handleOnChange = (e) => {
        const value = e.target.value;
        this.setState({
            count: value.length
        });
    };
  render() {
    return (
      <div className="container">
        <textarea rows="3"
        onChange={ this.handleOnChange }
        ></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
