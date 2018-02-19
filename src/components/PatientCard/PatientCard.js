import React from 'react';
import './PatientCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const PatientCard = (props) => {

  return (
    <div className="PatientCard">
      <p><span>Patient Id: </span>{props.absName} </p>
      <p><span>Last update: </span>{props.lastAppt}</p>
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
