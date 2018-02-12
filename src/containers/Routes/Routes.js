import React, { Component } from 'react';
import PatientDashboard from '../PatientDashboard/PatientDashboard';
import Sensory from '../Sensory/Sensory';
import Modulation from '../Modulation/Modulation';
import Executive from '../Executive/Executive';
import Postural from '../Postural/Postural';
import Social from '../Social/Social.js';
import { Route } from 'react-router-dom';

class Routes extends Component {

  render() {
    return (
      <div>
        <Route path="/patient/dashboard" component={PatientDashboard} />
        <Route path="/patient/sensory" component={Sensory} />
        <Route path="/patient/modulation" component={Modulation} />
        <Route path="/patient/executive" component={Executive} />
        <Route path="/patient/postural" component={Postural} />
        <Route path="/patient/social" component={Social} />
      </div>
    )
  }
}

export default Routes;