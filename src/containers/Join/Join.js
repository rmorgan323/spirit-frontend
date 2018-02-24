import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import './Join.css';

class Join extends Component {
  constructor() {
    super();

    this.state = {
      clinicPasscode: '',
      error: '',
      success: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const oldClinc = this.props.user.clinic;
    const newClinic = nextProps.user.clinic;
    let error;
    let success;

    if (oldClinc === newClinic) {
      success = '';
      error =
        'Clinic not found. Please double check the clinic passcode or contact your clinic administrator.';
      this.setState({ error, success });
      return;
    } else if (oldClinc !== newClinic) {
      error = '';
      success = `You have successfully joined ${newClinic}!`;
      this.setState({ error, success });
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  joinClinic = (event, passcode) => {
    event.preventDefault();
    const { joinExistingClinic, user } = this.props;
    let error;

    if (passcode.length !== 8) {
      error = 'A clinic passcode must be exactly eight characters in length';
      this.setState({ error });
      return;
    }

    const clinicMessage = joinExistingClinic({ passcode: passcode }, user.id);
  };

  render() {
    const { clinicPasscode, error, success } = this.state;
    const { user } = this.props;

    return (
      <div className="Join">
        <h2>Join a Clinic</h2>

        <div className="join-clinic-directions">
          To join an existing clinic on SpIRiT©, you must use a clinic's eight
          digit passcode. If you do not know your clinic's passcode, please
          contact your SpIRiT© administrator.
        </div>

        <div className="join-clinic-directions">
          If your clinic has not been registered, click 'CREATE NEW CLINIC'
          below to learn how you can add your clinic and start using SpIRiT©.
        </div>

        <form>
          <input
            className="input-password"
            onChange={event => this.handleChange(event)}
            value={clinicPasscode}
            name="clinicPasscode"
            placeholder="Enter Passcode"
            maxLength={8}
          />

          <button
            className="submit-button"
            type="submit"
            onClick={event => this.joinClinic(event, clinicPasscode)}
          >
            SUBMIT
          </button>
        </form>

        {error && <span className="error-message">{error}</span>}

        {success && <span className="success-message">{success}</span>}

        <NavLink className="join-link" to={`/spirit/users/${user.id}/create`}>
          CREATE NEW CLINIC
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  joinExistingClinic: (passcode, userId) => {
    dispatch(actions.joinExistingClinic(passcode, userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Join);

Join.propTypes = {
  joinExistingClinic: PropTypes.func,
  user: PropTypes.object
};
