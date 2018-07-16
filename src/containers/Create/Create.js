/*eslint-disable react/no-unescaped-entities*/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import InstructionWrapper from '../../components/InstructionWrapper/InstructionWrapper';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import generator from 'generate-password';
import createClinicCopy from '../../data/copyContent/createClinicCopy';
import './Create.css';

export class Create extends Component {
  state = {
    clinicName: '',
    clinicAbbreviation: '',
    successMessage: '',
    error: '',
    success: ''
  };

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
      error = createClinicCopy.clinicNameError;
      this.setState({ error, success });
      return;
    } else if (clinicAbbreviation.length !== 3) {
      success = '';
      error = createClinicCopy.clinicAbbreviationError;
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
    success = `${createClinicCopy.addClinicSuccess}${passcode}.`;
    this.setState({ error, success, clinicName: '', clinicAbbreviation: '' });
    saveClinic({ name, abbreviation, passcode }, user.id);
  };

  displayClinic = () => {
    const { user } = this.props;

    return (
      <div>
        <h3 className="current-clinic-header">{createClinicCopy.currentClinic}</h3>
        <h4>
          <span className="clinic-span">{createClinicCopy.memberOfClinic}}</span>
          {user.clinic}
        </h4>
        <h4>
          <span className="clinic-span">{createClinicCopy.clinicAbbreviation}</span>
          {user.clinic_abbreviation}
        </h4>
        <h4>
          <span className="clinic-span">{createClinicCopy.clinicPasscode}</span>
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

        <h3>Add a New Clinic</h3>

        <InstructionWrapper>
          <div className={`instructions`}>
            {createClinicCopy.addDirections1}
          </div>
          <div className={`instructions`}>
            {createClinicCopy.addDirections2}
          </div>
        </InstructionWrapper>

        <form className="new-clinic-form">
          <input
            className="input-clinic-name"
            onChange={event => this.handleChange(event)}
            value={clinicName}
            name="clinicName"
            placeholder={createClinicCopy.newClinicPlaceholder}
            maxLength={30}
          />

          <input
            className="input-abbreviation"
            onChange={event => this.handleChange(event)}
            value={clinicAbbreviation}
            name="clinicAbbreviation"
            placeholder={createClinicCopy.clinicAbbreviationPlaceholder}
            maxLength={3}
          />

          <button
            className="submit-button"
            type="submit"
            onClick={event =>
              this.saveNewClinic(event, clinicName, clinicAbbreviation)
            }
          >
           {createClinicCopy.submitClinic}
          </button>
        </form>

        {error && <span className="error-message">{error}</span>}

        {success && <span className="success-message">{success}</span>}

        <NavLink className="join-link" to={`/spirit/users/${user.id}/join`}>
          {createClinicCopy.joinClinic}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);

Create.propTypes = {
  saveClinic: PropTypes.func,
  user: PropTypes.object
};
