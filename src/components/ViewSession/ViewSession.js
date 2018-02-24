import React from 'react';
import './ViewSession.scss';
import { connect } from 'react-redux';
import moment from 'moment';
import processProcessesData from '../../helpers/processProcessesData/processProcessesData';
import formatTherapyGoalData from '../../helpers/formatTherapyGoalData/formatTherapyGoalData';
import formatTreatmentPlanData from '../../helpers/formatTreatmentPlanData/formatTreatmentPlanData';

const ViewSession = (props) => {

  let date, clinic, patient, concern, processValues, processValuesExec, processValuesMod, processValuesPos, processValuesSen, processValuesSoc, treatmentPlan, therapyGoal;

  if (props.selectedSession.id) {
    patient = <h2>Patient: {props.currentPatient.abstracted_name}</h2>
    date = <h4>{moment(props.selectedSession.created_at).format('LL')}</h4>
    clinic = <h4>Clinic: {props.currentPatient.clinic_name}</h4>
    concern = (
      <div>
        <h3>Primary Concern</h3>
        <p>{props.selectedConcern.description}</p>
        <p className={props.selectedConcern.domain_1 ? "view-dots" : "view-dots opacity-zero"}>1</p>
        <p className={props.selectedConcern.domain_2 ? "view-dots" : "view-dots opacity-zero"}>2</p>
        <p className={props.selectedConcern.domain_3 ? "view-dots" : "view-dots opacity-zero"}>3</p>
        <p className={props.selectedConcern.domain_4 ? "view-dots" : "view-dots opacity-zero"}>4</p>
        <p className={props.selectedConcern.domain_5 ? "view-dots" : "view-dots opacity-zero"}>5</p>
        <p className={props.selectedConcern.domain_6 ? "view-dots" : "view-dots opacity-zero"}>6</p>
        <p>{props.selectedConcern.notes}</p>
      </div>
    )
    processValues = processProcessesData([props.selectedProcess]);
    treatmentPlan = formatTreatmentPlanData([props.selectedTreatmentPlan]);
    therapyGoal = formatTherapyGoalData([props.selectedTherapyGoal]);
    processValuesExec = processValues.executive.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        return <p>{obj.title}: {obj.values[0]}</p>
      }
    })
    processValuesMod = processValues.modulation.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        return <p>{obj.title}: {obj.values[0]}</p>
      }
    })
    processValuesPos = processValues.postural.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        obj.values[0] === 'true' ? obj.values[0] = 'Yes' : null;
        obj.values[0] === 'false' ? obj.values[0] = 'No' : null;
        return <p>{obj.title}: {obj.values[0]}</p>
      }
    })
    processValuesSen = processValues.sensory.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        return <p>{obj.title}: {obj.values[0]}</p>
      }
    })
    processValuesSoc = processValues.social.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        obj.values[0] === true ? obj.values[0] = 'Yes' : null;
        obj.values[0] === false ? obj.values[0] = 'No' : null;
        return <p>{obj.title}: {obj.values[0]}</p>
      }
    })
    treatmentPlan = treatmentPlan.map(obj => {
      if (obj.value !== null && obj.dbName !== 'created_at') {
        return <p>{obj.title}: {obj.value}</p>
      }
    })
    therapyGoal = therapyGoal.map(obj => {
      if (obj.value !== null && obj.dbName !== 'created_at') {
        return <p>{obj.title}: {obj.value}</p>
      }
    })

  } 

  return (
    <div className="ViewSession">
      <div className="view-header-top">
        <div className="view-patient">
          {patient}
        </div>
        <div className="view-date">
          {date}
        </div>
      </div>
      <div className="view-clinic">
        {clinic}
      </div>
      <div className="view-concern">
        {concern}
      </div>
      <div className="view-processes">
        <h3>Processes</h3>
        <h4>Modulation:</h4>
        {processValuesMod}
        <h4>Postural:</h4>
        {processValuesPos}
        <h4>Executive:</h4>
        {processValuesExec}
        <h4>Sensory:</h4>
        {processValuesSen}
        <h4>Social:</h4>
        {processValuesSoc}
      </div>
      <div className="view-treatment">
        <h3>TreatmentPlan</h3>
        {treatmentPlan}
      </div>
      <div className="view-therapy">
        <h3>Therapy Goals</h3>
        {therapyGoal}
      </div>
    </div>
  )
}

const mapStateToProps = store => ({
  currentPatient: store.currentPatient,
  selectedConcern: store.selectedConcern,
  selectedSession: store.selectedSession,
  selectedProcess: store.selectedProcess,
  selectedTherapyGoal: store.selectedTherapyGoal,
  selectedTreatmentPlan: store.selectedTreatmentPlan,
  comparisonData: store.comparisonData
})

export default connect(mapStateToProps, null)(ViewSession);