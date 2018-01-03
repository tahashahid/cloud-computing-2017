import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }

    store.subscribe(()=>{
        this.setState(
        {
            counter: store.getState().user
        }
      )
    })

  }

  updateCounter(){
    store.dispatch({type:'INCREMENT'})
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {this.state.counter}
        <button onClick={ this.updateCounter.bind(this) }> INCREMENT </button>
        <P1/>
      </div>
    );
  }
}

export default App;


class P1 extends Component {
  render() {
    return (
      <div className="App">
        P1
        <P2 />
      </div>
    );
  }
}

class P2 extends Component {
  render() {
    return (
      <div className="App">
        P2
        <Com1 />
      </div>
    );
  }
}

class Com1 extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }

    store.subscribe(()=>{
      this.setState(
        {
            counter: store.getState().user
        }
      )
    })

  }

  
  
  render() {

    return (
      <div className="App">
        com1
          {this.state.counter}
        
      </div>
    );
  }
}

