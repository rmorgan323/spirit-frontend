import React, { Component } from 'react';
import PatientDashboard from '../../containers/PatientDashboard/PatientDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PatientDashboard />
      </div>
    );
  }
}

export default App;
