import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PatientCard from '../PatientCard/PatientCard';
import './PatientList.css';

const PatientList = props => {
  let patientListDisplay;

  if (props.patientList.length) {
    patientListDisplay = props.patientList.map(patient => {
      return (
        <PatientCard
          key={patient.id}
          id={patient.id}
          absName={patient.abstracted_name}
          lastAppt={moment(patient.updated_at).format('ll')}
        />
      );
    });
  }

  return <div className="PatientList">{patientListDisplay}</div>;
};

const mapStateToProps = store => ({
  patientList: store.patientList
});

export default connect(mapStateToProps, null)(PatientList);
