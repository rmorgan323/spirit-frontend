import React, { Component } from 'react';
import './Join.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions';

class Join extends Component {
  constructor() {
    super();

    this.state = {
      clinicPasscode: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  joinClinic = (event, passcode) => {
    event.preventDefault();
    this.props.joinExistingClinic({passcode: passcode}, this.props.user.id);
  }

  render() {
    return (
      <div className="Join">
        <h4>Join a Clinic</h4>
        <form>
          <input 
            className="input-password"
            onChange={(event) => this.handleChange(event)}
            value={this.state.clinicPasscode}
            name="clinicPasscode"
            placeholder="Enter Passcode"
          />
          <button 
            className="submit-button"
            type="submit"
            onClick={(event) => this.joinClinic(event, this.state.clinicPasscode)}
          >SUBMIT</button>
        </form>
        <NavLink className="join-link" to={`/spirit/users/${this.props.user.id}/create`}>CREATE NEW CLINIC</NavLink>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => ({
  joinExistingClinic: (passcode, userId) => {
    dispatch(actions.joinExistingClinic(passcode, userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Join);