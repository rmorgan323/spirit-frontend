import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import generator from 'generate-password';
import './Create.css';

class Create extends Component {
  constructor() {
    super();

    this.state = {
      clinicName: '',
      clinicAbbreviation: '',
      successMessage: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveNewClinic = (event, name, abbr) => {
    event.preventDefault();
    const { saveClinic, user } = this.props;

    const password = generator.generate({
      length: 8,
      uppercase: false,
      numbers: true,
      excludeSimilarCharacters: true
    });

    saveClinic({ name: name, abbreviation: abbr, passcode: password }, user.id);
  };

  displayClinic = () => {
    const { user } = this.props;

    if (Object.keys(user).length) {
      return (
        <div>
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
    }
  };

  render() {
    const { clinicName, clinicAbbreviation } = this.state;
    const { user } = this.props;

    return (
      <div className="Create">
        {this.displayClinic()}

        <form>
          <input
            className="input-clinic-name"
            onChange={event => this.handleChange(event)}
            value={clinicName}
            name="clinicName"
            placeholder="Switch to NEW Clinic"
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

        <NavLink className="join-link" to={`/spirit/users/${user.id}/join`}>
          JOIN EXISTING CLINIC
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  saveClinic: (clinic, userId) => {
    dispatch(actions.saveClinic(clinic, userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);

Create.propTypes = {
  saveClinic: PropTypes.func,
  user: PropTypes.object
};
