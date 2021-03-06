/*eslint-disable react/no-unescaped-entities*/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import generator from 'generate-password';
import createClinicCopy from '../../data/copyContent/createClinicCopy';
import './Create.css';

export class Create extends Component {
  constructor() {
    super();

    this.state = {
      clinicName: '',
      clinicAbbreviation: '',
      successMessage: '',
      error: '',
      success: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveNewClinic = (event, name, abbreviation) => {
    event.preventDefault();
    const { saveClinic, user } = this.props;
    const { clinicName, clinicAbbreviation } = this.state;
    let error;
    let success;
    if (!clinicName || !clinicAbbreviation) {
      success = '';
      error = 'Please enter a clinic name and abbreviation';
      this.setState({ error, success });
      return;
    } else if (clinicAbbreviation.length !== 3) {
      success = '';
      error = 'Clinic abbreviation must be three characters long';
      this.setState({ error, success });
      return;
    }

    const passcode = generator.generate({
      length: 8,
      uppercase: false,
      numbers: true,
      excludeSimilarCharacters: true
    });

    error = '';
    success = `Clinic successfully added! Your clinic passcode is ${passcode}.`;
    this.setState({ error, success, clinicName: '', clinicAbbreviation: '' });
    saveClinic({ name, abbreviation, passcode }, user.id);
  };

  displayClinic = () => {
    const { user } = this.props;

    return (
      <div>
        <h3 className="current-clinic-header">Your Current Clinic</h3>
        <h4>
          <span className="clinic-span">You are a member of: </span>
          {user.clinic}
        </h4>
        <h4>
          <span className="clinic-span">Clinic Abbreviation: </span>
          {user.clinic_abbreviation}
        </h4>
        <h4>
          <span className="clinic-span">Clinic Passcode: </span>
          {user.clinic_passcode}
        </h4>
      </div>
    );
  };

  render() {
    const { clinicName, clinicAbbreviation, error, success } = this.state;
    const { user } = this.props;

    return (
      <div className="Create">
        {user.clinic && this.displayClinic()}

        <form className="new-clinic-form">
          <h3>Add a New Clinic</h3>
          <div className="add-clinic-directions">
            {createClinicCopy.addDirections1}
          </div>
          <div className="add-clinic-directions">
            {createClinicCopy.addDirections2}
          </div>
          <input
            className="input-clinic-name"
            onChange={event => this.handleChange(event)}
            value={clinicName}
            name="clinicName"
            placeholder="New Clinic Name"
            maxLength={30}
          />
          <input
            className="input-abbreviation"
            onChange={event => this.handleChange(event)}
            value={clinicAbbreviation}
            name="clinicAbbreviation"
            placeholder="Choose a 3-letter abbreviation for your clinic"
            maxLength={3}
          />
          <button
            className="submit-button"
            type="submit"
            onClick={event =>
              this.saveNewClinic(event, clinicName, clinicAbbreviation)
            }
          >
            SUBMIT
          </button>
        </form>

        {error && <span className="error-message">{error}</span>}

        {success && <span className="success-message">{success}</span>}

        <NavLink className="join-link" to={`/spirit/users/${user.id}/join`}>
          JOIN EXISTING CLINIC
        </NavLink>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  saveClinic: (clinic, userId) => {
    dispatch(actions.saveClinic(clinic, userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);

Create.propTypes = {
  saveClinic: PropTypes.func,
  user: PropTypes.object
};
