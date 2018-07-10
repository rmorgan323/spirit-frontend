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
      success: '',
      showInstructions: true
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

  toggleInstructions = () =>
    this.setState(prevState => ({
      showInstructions: !prevState.showInstructions
    }));

  render() {
    const {
      firstInitial,
      lastInitial,
      error,
      success,
      showInstructions
    } = this.state;
    const { user, patientList } = this.props;

    return (
      <div className="UserDashboard">
        <div className="user-dashboard-header">
          <h2>{user.name} - OT Dashboard</h2>

          <div>
            <Link
              className="clinic-button"
              to={`/spirit/users/${user.id}/create`}
            >
              {user.clinic ? 'SEE CLINIC INFO' : 'ADD/JOIN A CLINIC'}
            </Link>
          </div>
        </div>

        <div className="user-dashboard-content">
          <h3>New Patients</h3>

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
          <h5>Add NEW patient with 2 patient initials</h5>

          {error && <span className="error-message">{error}</span>}

          {success && <span className="success-message">{success}</span>}

          <div
            className={`instructions-wrapper ${!showInstructions ?
              `show-instructions` : `hide-instructions`}`}
          >
            <div className={`patient-name-directions`}>
              {userDashboardCopy.patientDirections1}
            </div>

            <div className={`patient-name-directions`}>
              {userDashboardCopy.patientDirections2}
            </div>
          </div>

          <span
            className="patient-directions-toggle"
            onClick={this.toggleInstructions}
          >{`${showInstructions ? `Hide` : `Show`} Instructions`}</span>

          {patientList.length !== 0 && (
            <div>
              <h3 className="current-patients">Current Patients</h3>
              <PatientList />
            </div>
          )}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);

UserDashboard.propTypes = {
  savePatient: PropTypes.func,
  user: PropTypes.object,
  patientList: PropTypes.array,
  wipeStoreFromUserDashboard: PropTypes.func
};
