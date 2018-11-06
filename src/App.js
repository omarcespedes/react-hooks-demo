import React, { Component } from 'react';
import './App.css';
import ClassCounter from './classCounter/classCounter'
import HookCounter from './hookCounter/hookCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassCounter />
        <HookCounter />
      </div>
    );
  }
}

export default App;
