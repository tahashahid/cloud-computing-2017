import React from 'react';
import './App.css';

import Header from './header/Header';
import ProductItem from './product-item/ProductItem';


class App extends React.Component {

  constructor(){
    super();
   
    this.state= { items:["to do one", "To do two"]}
    this.addTodo= this.addTodo.bind(this);

    // this.state= { items:[
    //   {id : 1, name : "ABC 1", desc : "", amount: 12, image : ""}
    // ]}

  
  }

addTodo(Todotext){
  
  
  this.state.items.push(Todotext)

  this.setState({items: this.state.items})

  
}


  render() {
    
    

    return (
      <div className="App">
       <Todoform Todofn = {this.addTodo}/>
       <ul> {this.state.items.map(x => <li>{x}</li>)}</ul>
      </div>
      
    );
  }
}


class Todoform extends React.Component {
  constructor(){
    super();
   
    
    this.addTodo= this.addTodo.bind(this);


    this.state = {
      image : ""
    }

    this.fileHandler = this.fileHandler.bind(this);
  }

addTodo(e){
  e.preventDefault();
  console.log("submitted")
  //this.state.items.push(this.refs.todoField.value)
this.props.Todofn (this.refs.todoField.value)
  //this.setState({items: this.state.items})

  this.refs.todoField.value = "";
}


fileHandler(e){
  console.log(e.target.files[0]);

  var fileReader = new FileReader();
  
    fileReader.onload = (e)=>{
      var base64 = e.target.result;
      console.log(base64);

      this.setState({image : base64})

    };
  
    fileReader.readAsDataURL(e.target.files[0]);
}

  render() {
    
    

    return (
      <div className="App">
       <form onSubmit={this.addTodo}> 
         <input placeholder="to do" type="text" 
          ref="todoField"
        />
        <input type="file" onChange={this.fileHandler} />
         <button>add to do </button> 
        </form>

        <img src={this.state.image} />
      
      </div>
      
    );
  }
}

export default App;


