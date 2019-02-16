import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Home/> */}
      </div>
    );
  }
}

export default App;
