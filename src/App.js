import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Router from './components/router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router />
        {/* <Product/> */}
        {/* <Home/> */}
      </div>
    );
  }
}

export default App;
