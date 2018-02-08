import React, { Component } from 'react';
import Routes from '../../containers/Routes/Routes';
import Header from '../../containers/Header/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
