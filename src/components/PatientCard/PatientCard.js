import React, { Component } from 'react';
import './PatientCard.css';
import { Link } from 'react-router-dom';

const PatientCard = ({ absName, lastAppt, id}) => {

    return (
      <div>
        <p>Patient Id: {absName}</p>
        <p>Last update: {lastAppt}</p>
        <Link to={`/spirit/patients/${id}`}>SELECT</Link>
      </div>
    ) 
}

export default PatientCard;


