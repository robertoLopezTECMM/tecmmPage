import React, { Component } from 'react';

import Landing from './landing.js';
import RouterPrincipal from './router-principal.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterPrincipal url={window.location.href}/>
      </div>
    );
  }
}

export default App;
