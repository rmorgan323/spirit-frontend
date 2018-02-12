import React, { Component } from 'react';
import PatientDashboard from '../PatientDashboard/PatientDashboard';
import Sensory from '../Sensory/Sensory';
import Modulation from '../Modulation/Modulation';
import { Route } from 'react-router-dom'

class Routes extends Component {

  render() {
    return (
      <div>
        <Route path="/patient/dashboard" component={PatientDashboard} />
        <Route path="/patient/sensory" component={Sensory} />
        <Route path="/patient/modulation" component={Modulation} />
      </div>
    )
  }
}

export default Routes;