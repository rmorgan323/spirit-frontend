import React from 'react'
import './PatientHeader.css';
import { connect } from 'react-redux';
import moment from 'moment';

const PatientHeader = (props) => {

  let display;

  if (props.currentPatient.id !== undefined) {
    const patientDisplay = props.currentPatient.abstracted_name;
    const sinceDisplay = moment(props.currentPatient.created_at).format('LL')
    display = (
      <div className="patient-header-holder">
      <h4>PATIENT:<span className="patient-header-span">{patientDisplay}</span></h4>
      </div>
    )
  }

  return (
    <div className="PatientHeader">
      {display}
    </div>
  )
}

const mapStateToProps = store => ({
  currentPatient: store.currentPatient
})

export default connect(mapStateToProps, null)(PatientHeader);
