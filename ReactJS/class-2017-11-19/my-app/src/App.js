import React from 'react';
import './App.css';

import Header from './header/Header';
import ProductItem from './product-item/ProductItem';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      b: 10
    }

    this.click2 = this.click2.bind(this);

    // console.log(this.state.b);
    // setInterval(() => {
    //   this.state.b++;
    //   //this.setState({b: this.state.b});
    //   console.log(this.state.b);
    // }, 2000);

  }

  click2(){
    this.state.b++;
    this.setState({b: this.state.b});
    // alert("clicked 2");
  }

  render() {
    
    // var a = 10;
    // console.log(a);
    // setInterval(() => {
    //   a++;
    //   console.log(a);
    // }, 2000);

    return (
      <div className="App">
        <button onClick={alert.bind(window, 'test')}> click here </button>
        <button onClick={ this.click2 }> click here 2 </button>
        <br/>
        { this.state.b }
      </div>
      
    );
  }
}

export default App;


