import React, { Component } from 'react';
import Viewer from './Viewer';
import './styles/App.css';
import logo from './images/1.png';

class App extends Component {

  render() {

    return (
      <div className="App">
      
        <div className="logo-container">
          <a href="https://scufgaming.com/"><img className="logo" src={logo} alt="scuf-gaming-logo" /></a>
        </div>

        <Viewer />

        <div className="controller-information">
        
          <div className="controller-features">
            <h2 className="features-title">
              FEATURES:
            </h2>
            <ul className="feature-list">
              <li>Poop</li>
              <li>Moar poop</li>
              <li>Pewp</li>
            </ul>
          </div>

          <div className="witb-container">
            <div className="whats-in-the-box">
              <h2 className="witb-title">
                WHATS IN THE BOX?
              </h2>
              <ul className="witb-list">
                <li>Gold Embossed "Top 10 Ranked US East Player 2019" Certificate</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
