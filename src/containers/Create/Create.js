import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { NavLink } from 'react-router-dom';
import './Create.css';

class Create extends Component {
  constructor() {
    super();

    this.state = {
      clinicName: '',
      clinicAbbreviation: '',
      successMessage: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  saveNewClinic = (event, name, abbr) => {
    event.preventDefault();
    this.props.saveClinic({name: name, abbreviation: abbr}, this.props.user.id);
  }

  render() {
    return (
      <div>
        <form>
          <input 
            onChange={(event) => this.handleChange(event)} 
            value={this.state.clinicName} 
            name="clinicName" 
            placeholder="Add NEW clinic">
          </input>
          <input 
            onChange={(event) => this.handleChange(event)} 
            value={this.state.clinicAbbreviation} 
            name="clinicAbbreviation" 
            placeholder="Choose a 3-letter abbreviation for your clinic">
          </input>
          <button 
            type="submit"
            onClick={(event) => this.saveNewClinic(event, this.state.clinicName, this.state.clinicAbbreviation)}
          >SUBMIT</button>
        </form>
        <NavLink to={`/spirit/users/${this.props.user.id}/join`}>JOIN EXISTING CLINIC</NavLink>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => ({
  saveClinic: (clinic, userId) => {
    dispatch(actions.saveClinic(clinic, userId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Create);