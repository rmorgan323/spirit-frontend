/*eslint-disable react/no-unescaped-entities*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import PatientList from '../PatientList/PatientList';
import * as actions from '../../actions';
import './UserDashboard.css';

class UserDashboard extends Component {
  constructor() {
    super();

    this.state = {
      firstInitial: '',
      lastInitial: '',
      error: ''
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

    success = 'Patient successfully added!'
    error = '';
    this.setState({ error, success });

    savePatient(firstInitial, lastInitial, user.id, user.clinic_abbreviation);
  };

  render() {
    const { firstInitial, lastInitial, error, success } = this.state;
    const { user } = this.props;

    return (
      <div className="UserDashboard">
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
          Each patient name will be a combination of your clinic abbreviation,
          the patient's first and last initial, and a unique number identifier
          (ie CLI + AB + 10).
        </div>

        <div className="patient-name-directions">
          Please keep this abstracted name in your personal patient records for
          future reference.
        </div>

        <PatientList />

        <div className="link-holder">
          <Link to={`/spirit/users/${user.id}/create`}>SEE CLINIC INFO</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
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
