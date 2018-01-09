import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      keys: [],
      data: null,
      edit: [],
    }
  }



  componentDidMount() {
    firebase.database().ref('items/').on('value', data => {
      var keys = [];
      var edit = [];
      var obj = data.val();
      var arr = Object.values(obj);
      for (let x in obj) {
        keys.push(x);
        edit.push(true);
      }
      // console.log(arr)
      this.setState({
        arr: arr,
        keys: keys,
        edit: edit,
      })

    })
  }


  add(e) {
    e.preventDefault();
    var input = this.refs.text.value;
    // console.log(input)
    firebase.database().ref('items/').push(
      {
        task: input,
      }
    )
    this.refs.text.value = '';
  }
  dlt(i) {
    var key = this.state.keys[i];
    console.log(key);
    firebase.database().ref('items/').child(key).remove()
  }
  update(i){
    var key = this.state.keys[i];
    firebase.database().ref('items/').child(key).update({
       task: this.state.data,
    })
  }
  edit(i, data) {
    var a = this.state.edit.slice(0)
    a.splice(i, 1, false)

    var key = this.state.keys[i];
    console.log(data)
    this.setState({
      data: data,
      edit: a,
    })
  }


  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.arr.map((data, i) => {
              return (
                <div>
                  {this.state.edit[i] ?
                  <li key={i}>{data.task}</li>
                  :
                  <form onSubmit={(e)=>e.preventDefault()}><input value={this.state.data} onChange={(e)=> this.setState({data: e.target.value})}/>
                  <button onClick={this.update.bind(this, i)}>submit</button></form>}
                  <button onClick={this.edit.bind(this, i, data.task)}>Edit</button>
                  <button onClick={this.dlt.bind(this, i)}>Delete</button>
                </div>)
            })
          }
        </ul>
        <form onSubmit={this.add.bind(this)}>
          <input ref='text' />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
