import React from 'react';
import './PatientCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const PatientCard = props => {
  const { abstractedName, lastAppt, id } = props;

  return (
    <div className="PatientCard">
      <p>
        <span>Patient Id: </span>
        {abstractedName}{' '}
      </p>

      <p>
        <span>Last update: </span>
        {lastAppt}
      </p>

      <Link
        onClick={() => props.getPatientConcerns(id)}
        to={`/spirit/patients/${id}`}
      >
        SELECT
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getPatientConcerns: id => {
    dispatch(actions.getPatientConcerns(id));
  }
});

export default connect(null, mapDispatchToProps)(PatientCard);
