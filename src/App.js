import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <div>
        <Header namaheader="header2" />
        <Counter />
      </div>
    );
  }
}

export default App;
