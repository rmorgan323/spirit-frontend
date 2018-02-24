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

    if (!firstInitial || !lastInitial) {
      error = 'Please enter a first and last patient initial';
      this.setState({ error });
      return;
    }

    error = '';
    this.setState({ error });

    savePatient(firstInitial, lastInitial, user.id, user.clinic_abbreviation);
  };

  render() {
    const { firstInitial, lastInitial, error } = this.state;
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

        <span className="patient-name-directions">
          Each patient name will be a combination of your clinic abbreviation,
          the patient's first and last initial, and a unique number identifier
          (ie CLI + AB + 10). Please keep this abstracted name in your personal
          patient records for future reference.
        </span>

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
