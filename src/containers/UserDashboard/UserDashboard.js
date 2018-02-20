import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import PatientList from '../../components/PatientList/PatientList';
import * as actions from '../../actions';
import './UserDashboard.css';

class UserDashboard extends Component {
  constructor() {
    super();

    this.state = {
      firstInitial: '',
      lastInitial: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    this.props.savePatient(this.state.firstInitial, this.state.lastInitial, this.props.user.id, this.props.user.clinic_abbreviation)
  }

  render() {
    return (
      <div className="UserDashboard">
        <h4>Add NEW patient with 2 patient initials</h4>
        <div className="input-holder">
          <input maxLength={1} onChange={(event) => this.handleChange(event)} value={this.state.firstInitial.toUpperCase()} name="firstInitial" placeholder="First Initial"></input>
          <input maxLength={1} onChange={(event) => this.handleChange(event)} value={this.state.lastInitial.toUpperCase()} name="lastInitial" placeholder="Last Initial"></input>
          <button onClick={() => this.handleSubmit()} type="submit">SUBMIT</button>
        </div>
        <PatientList />

        <div className="link-holder">
          <Link to={`/spirit/users/${this.props.user.id}/create`}>ADD CLINIC</Link>
          <Link to={`/spirit/users/${this.props.user.id}/join`}>JOIN CLINIC</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => ({
  savePatient: (first, last, user, clinicAbbr) => {
    dispatch(actions.savePatient(first, last, user, clinicAbbr))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);

UserDashboard.propTypes = {
  savePatient: PropTypes.func,
  user: PropTypes.object
};
