/*eslint-disable no-useless-escape*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';

import PatientDashboard from '../PatientDashboard/PatientDashboard';
import Sensory from '../Sensory/Sensory';
import Modulation from '../Modulation/Modulation';
import Executive from '../Executive/Executive';
import Postural from '../Postural/Postural';
import Social from '../Social/Social.js';
import Spirit from '../Spirit/Spirit.js';
import Join from '../Join/Join.js';
import Create from '../Create/Create.js';
import UserDashboard from '../UserDashboard/UserDashboard';
import clearLocalStorage from '../../helpers/clearLocalStorage/clearLocalStorage';
import Users from '../Users/Users';
import Header from '../Header/Header';
import Sessions from '../../containers/Sessions/Sessions';
import PatientHeader from '../../components/PatientHeader/PatientHeader';
import ConcernHeader from '../../components/ConcernHeader/ConcernHeader';
import Sam from '../Sam/Sam';
import SessionTabs from '../../components/SessionTabs/SessionTabs';
import Finish from '../Finish/Finish';

class Routes extends Component {
  componentDidMount = async () => {
    await this.checkForKey();
    await this.props.getUser();
    await this.props.getDefinitions();
  };

  checkForKey = () => {
    const key = localStorage.getItem('spirit-token-987');
    if (window.location.search.length > 200) {
      const token = this.getToken();
      localStorage.setItem('spirit-token-987', token);
    } else if (key) {
      return;
    } else {
      clearLocalStorage();
      window.location = 'https://spirit.e1.loginrocket.com/';
      return;
    }
  };

  getToken = () => {
    const removeFront = new RegExp(/\?token=/);
    const removeBack = new RegExp(/\&signup=true/);
    const parse = window.location.search.replace(removeFront, '');
    const parseEnd = parse.replace(removeBack, '');

    return parseEnd;
  };

  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <Route path="/spirit/patients" component={PatientHeader} />
        <Route path="/spirit/concerns" component={PatientHeader} />
        <Route path="/spirit/sessions" component={PatientHeader} />

        <Route path="/spirit/concerns" component={ConcernHeader} />
        <Route path="/spirit/sessions" component={ConcernHeader} />
        <Route path="/spirit/sessions/:session_id" component={SessionTabs} />

        <Switch>
          {/*  <Route path="/spirit/sessions/:sessionId/therapygoals" component={Therapy} /> */}
          {/*  <Route path="/spirit/sessions/:sessionId/treatmentplans" component={Treatment} /> */}
          {/*  <Route path="/spirit/concerns/:concern_id" component={Concerns} />  */}
          <Route path="/spirit/sessions/:session_id/sam" component={Sam} />
          <Route
            path="/spirit/sessions/:session_id/sensory"
            component={Sensory}
          />

          <Route
            path="/spirit/sessions/:session_id/modulation"
            component={Modulation}
          />

          <Route
            path="/spirit/sessions/:session_id/executive"
            component={Executive}
          />

          <Route
            path="/spirit/sessions/:session_id/postural"
            component={Postural}
          />

          <Route
            path="/spirit/sessions/:session_id/social"
            component={Social}
          />

          <Route
            path="/spirit/sessions/:session_id/finish"
            component={Finish}
          />

          <Route
            path="/spirit/concerns/:concernId/sessions"
            component={Sessions}
          />
          <Route
            path="/spirit/patients/:patient_id"
            component={PatientDashboard}
          />

          <Route exact path="/spirit/users/:user_id/join" component={Join} />

          <Route
            exact
            path="/spirit/users/:user_id/create"
            component={Create}
          />

          <Route
            exact
            path="/spirit/users/:user_id"
            component={UserDashboard}
          />

          <Route path="/spirit/users" component={Users} />

          <Route path="/spirit/index" component={Spirit} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => {
    dispatch(actions.getUser());
  },
  getDefinitions: () => {
    dispatch(actions.getDefinitions());
  }
});

export default connect(null, mapDispatchToProps)(Routes);

Routes.propTypes = {
  getUser: PropTypes.func,
  getDefinitions: PropTypes.func
};
