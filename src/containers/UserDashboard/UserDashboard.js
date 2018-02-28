/*eslint-disable react/no-unescaped-entities*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import PatientList from '../PatientList/PatientList';
import userDashboardCopy from '../../data/copyContent/userDashboardCopy';
import * as actions from '../../actions';
import './UserDashboard.css';

export class UserDashboard extends Component {
  constructor() {
    super();

    this.state = {
      firstInitial: '',
      lastInitial: '',
      error: '',
      success: ''
    };
  }

  componentDidMount() {
    this.props.wipeStoreFromUserDashboard();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value.toUpperCase() });
  };

  handleSubmit = () => {
    const { firstInitial, lastInitial } = this.state;
    const { savePatient, user } = this.props;
    let error;
    let success;

    if (!firstInitial || !lastInitial) {
      success = '';
      error = 'Please enter a first and last patient initial';
      this.setState({ error, success });
      return;
    }

    success = 'Patient successfully added!';
    error = '';
    this.setState({ firstInitial: '', lastInitial: '', error, success });

    savePatient(firstInitial, lastInitial, user.id, user.clinic_abbreviation);
  };

  render() {
    const { firstInitial, lastInitial, error, success } = this.state;
    const { user, patientList } = this.props;
    console.log(patientList);

    return (
      <div className="UserDashboard">
        <h2>New Patients</h2>
        <div className="dividing-line" />
        <h4>Add NEW patient with 2 patient initials</h4>

        <div className="input-holder">
          <input
            maxLength={1}
            onChange={event => this.handleChange(event)}
            value={firstInitial.toUpperCase()}
            name="firstInitial"
            placeholder="First Initial"
          />

          <input
            maxLength={1}
            onChange={event => this.handleChange(event)}
            value={lastInitial.toUpperCase()}
            name="lastInitial"
            placeholder="Last Initial"
          />

          <button onClick={() => this.handleSubmit()} type="submit">
            SUBMIT
          </button>
        </div>

        {error && <span className="error-message">{error}</span>}

        {success && <span className="success-message">{success}</span>}

        <div className="patient-name-directions">
          {userDashboardCopy.patientDirections1}
        </div>

        <div className="patient-name-directions">
          {userDashboardCopy.patientDirections2}
        </div>

        {patientList.length && (
          <div>
            <h2>Current Patients</h2>
            <div className="dividing-line" />
            <PatientList />
          </div>
        )}

        <div className="link-holder">
          <Link to={`/spirit/users/${user.id}/create`}>SEE CLINIC INFO</Link>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  user: store.user,
  patientList: store.patientList
});

export const mapDispatchToProps = dispatch => ({
  savePatient: (first, last, user, clinicAbbr) => {
    dispatch(actions.savePatient(first, last, user, clinicAbbr));
  },
  wipeStoreFromUserDashboard: () => {
    dispatch(actions.wipeStoreFromUserDashboard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);

UserDashboard.propTypes = {
  savePatient: PropTypes.func,
  user: PropTypes.object,
  wipeStoreFromUserDashboard: PropTypes.func
};
