// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render() {
       return (
          <div>
             <Header />
             <Footer />
          </div>
       );
    }
 }
 
class Header extends React.Component {
    render(){
        
        let a = 1;

        let cssStyles = {color : "blue" , fontSize : "50px" }
        
        return (
            <div style={ cssStyles } >
                Header!! {a} 
                <Menu />
            </div>
        )
    }
}
  
class Footer extends React.Component {
    render(){
        return (
            <div>
                Footer!!
            </div>
        )
    }
}

class Menu extends React.Component {
    render(){
        return (
            <div>
                Menu!!
            </div>
        )
    }
}



 ReactDOM.render(<App />, document.getElementById('root'));


