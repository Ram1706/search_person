import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './components/MainCard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainCard/>
      </div>
    );
  }
}

export default App;
