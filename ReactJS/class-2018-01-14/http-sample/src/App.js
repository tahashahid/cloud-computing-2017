import React, { Component } from 'react';
import * as axios from 'axios';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      data : null
    }

    this.loadData = this.loadData.bind(this);
  }

  loadData(){

    /*let self = this;

    console.log("loadData FN");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML = this.responseText;
        console.log(this.responseText);

        self.setState({ data : JSON.parse(this.responseText) })
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhttp.send();*/


    let self = this;
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        console.log(response);
        self.setState({ data : response.data })
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="App">
        
        {
          this.state.data 
        ? 
          <div>
            <h1>{this.state.data.title}</h1>
            <p>{this.state.data.body}</p>
          </div>
        :
        <button onClick={this.loadData}> Load Data </button>

        }
        
      </div>
    );
  }
}

export default App;
