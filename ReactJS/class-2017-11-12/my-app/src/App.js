import React from 'react';
import './App.css';

import Header from './header/Header';
import ProductItem from './product-item/ProductItem';


class App extends React.Component {
  
  render() {
    let obj = {
      a:10,
      b: 20
    }
    let products = [
      {name: "p1", id: 1},
      {name: "p2", id: 2},
      {name: "p3", id: 3},
      {name: "p4", id: 4},
      {name: "p5", id: 5}
    ]
    return (
      <div className="App">
        <Header data="my header" data1="test" data2={obj} />
        <div className="container">
          <ul>
            { products.map(x => <ProductItem data={x} />) }
          </ul>
        </div>
      </div>
      
    );
  }
}

export default App;
