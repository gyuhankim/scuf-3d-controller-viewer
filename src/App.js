import React, { Component } from 'react';
import Viewer from './Viewer';
import './styles/App.css';
import logo from './images/1.png';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <div className="logo-container">
          <img className="logo" src={logo} alt="scuf-gaming-logo" />
        </div>

        <Viewer />

      </div>
    );
  }
}

export default App;
