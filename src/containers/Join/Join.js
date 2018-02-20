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
      clinicPasscode: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  joinClinic = (event, passcode) => {
    event.preventDefault();
    const { joinExistingClinic, user } = this.props;

    joinExistingClinic({ passcode: passcode }, user.id);
  };

  render() {
    const { clinicPasscode } = this.state;
    const { user } = this.props;

    return (
      <div className="Join">
        <h4>Join a Clinic</h4>

        <form>
          <input
            className="input-password"
            onChange={event => this.handleChange(event)}
            value={clinicPasscode}
            name="clinicPasscode"
            placeholder="Enter Passcode"
          />

          <button
            className="submit-button"
            type="submit"
            onClick={event => this.joinClinic(event, clinicPasscode)}
          >
            SUBMIT
          </button>
        </form>

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
