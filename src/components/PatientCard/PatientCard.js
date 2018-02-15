import React, { Component } from 'react';
import './PatientCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const PatientCard = (props) => {

  return (
    <div>
      <p>Patient Id: {props.absName}</p>
      <p>Last update: {props.lastAppt}</p>
      <Link onClick={() => props.getPatientConcerns(props.id)} to={`/spirit/patients/${props.id}`}>SELECT</Link>
    </div>
  ) 
}

const mapDispatchToProps = dispatch => ({
  getPatientConcerns: (id) => {
    dispatch(actions.getPatientConcerns(id))
  }
})

export default connect(null, mapDispatchToProps)(PatientCard);
