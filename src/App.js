import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
          <h2>Welcome to My Portfolio Page!</h2>
        </div>
  
        <div className="first">
          <p>first section</p>
          <p>Background Info:</p>
        </div>
         <div className="second">
          <p>second section</p>
          <p>Skills</p>
        </div>
        <div className="third">
          <p>third section</p>
          <p>Portfolio</p>
        </div>


      </div>
    );
  }
}

export default App;
