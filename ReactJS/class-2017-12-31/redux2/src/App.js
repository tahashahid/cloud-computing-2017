import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import P1 from './com1';
import P2 from './com2';


class App extends Component {

  render() {

    return (
      <div className="App">
        <P1/>
        <br/>
        <P2/>
      </div>
    );
  }
}

export default App;


