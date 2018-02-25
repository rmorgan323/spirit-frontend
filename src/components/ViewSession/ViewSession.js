import React from 'react';
import './ViewSession.css';
import { connect } from 'react-redux';
import moment from 'moment';
import processProcessesData from '../../helpers/processProcessesData/processProcessesData';
import formatTherapyGoalData from '../../helpers/formatTherapyGoalData/formatTherapyGoalData';
import formatTreatmentPlanData from '../../helpers/formatTreatmentPlanData/formatTreatmentPlanData';

const ViewSession = (props) => {

  let date, clinic, patient, ids, concern, processValues, processValuesExec, processValuesMod, processValuesPos, processValuesSen, processValuesSoc, treatmentPlan, therapyGoal;

  if (props.selectedSession.id) {
    patient = <h2>Patient: {props.currentPatient.abstracted_name}</h2>
    date = <h4>{moment(props.selectedSession.created_at).format('LL')}</h4>
    clinic = <h4>Clinic: {props.currentPatient.clinic_name}</h4>
    ids = <h4>Concern ID: {props.selectedSession.concern_id}, Session ID: {props.selectedSession.id}</h4>
    concern = (
      <div className="view-concern">
        <p className="view-concern-description">{props.selectedConcern.description}</p>
        <p className={props.selectedConcern.domain_1 ? "view-dots" : "view-dots opacity-zero"}>1</p>
        <p className={props.selectedConcern.domain_2 ? "view-dots" : "view-dots opacity-zero"}>2</p>
        <p className={props.selectedConcern.domain_3 ? "view-dots" : "view-dots opacity-zero"}>3</p>
        <p className={props.selectedConcern.domain_4 ? "view-dots" : "view-dots opacity-zero"}>4</p>
        <p className={props.selectedConcern.domain_5 ? "view-dots" : "view-dots opacity-zero"}>5</p>
        <p className={props.selectedConcern.domain_6 ? "view-dots" : "view-dots opacity-zero"}>6</p>
        <p className="view-concern-notes">{props.selectedConcern.notes}</p>
      </div>
    )
    processValues = processProcessesData([props.selectedProcess]);
    treatmentPlan = formatTreatmentPlanData([props.selectedTreatmentPlan]);
    therapyGoal = formatTherapyGoalData([props.selectedTherapyGoal]);
    processValuesExec = processValues.executive.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        return (
          <div className="data-holder">
            <p className="text-small">{obj.title}:</p>
            <p>{obj.values[0]}</p>
          </div>
        )
      }
    })
    processValuesMod = processValues.modulation.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        return (
          <div className="data-holder">
            <p className="text-small">{obj.title}: </p>
            <p>{obj.values[0]}</p>
          </div>
        )
      }
    })
    processValuesPos = processValues.postural.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        obj.values[0] === 'true' ? obj.values[0] = 'Yes' : null;
        obj.values[0] === 'false' ? obj.values[0] = 'No' : null;
        obj.values[0] === true ? obj.values[0] = 'Yes' : null;
        obj.values[0] === false ? obj.values[0] = 'No' : null;
        return (
          <div className="data-holder">
            <p className="text-small">{obj.title}: </p>
            <p>{obj.values[0]}</p>
          </div>
        )
      }
    })
    processValuesSen = processValues.sensory.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        return (
          <div className="data-holder">
            <p className="text-small">{obj.title}: </p>
            <p>{obj.values[0]}</p>
          </div>
        )
      }
    })
    processValuesSoc = processValues.social.map(obj => {
      if (obj.values[0] !== null && obj.dbName !== 'created_at') {
        obj.values[0] === true ? obj.values[0] = 'Yes' : null;
        obj.values[0] === false ? obj.values[0] = 'No' : null;
        return (
          <div className="data-holder">
            <p className="text-small">{obj.title}: </p>
            <p>{obj.values[0]}</p>
          </div>
        )
      }
    })
    treatmentPlan = treatmentPlan.map(obj => {
      if (obj.value !== null && obj.dbName !== 'created_at') {
        return (
          <div className="treatment-plan-text">
            <p className="text-small-2">{obj.title}: </p>
            <p>{obj.value}</p>
          </div>
        )
      }
    })
    therapyGoal = therapyGoal.map(obj => {
      if (obj.value !== null && obj.dbName !== 'created_at' && obj.dbName.split('_')[obj.dbName.split('_').length - 1] !== 'goal') {
        return (
          <div className="data-holder">
            <p className="text-small text-small-3">{obj.title}: </p>
            <p>{obj.value}</p>
          </div>
        )
      } else if (obj.value !== null && obj.dbName !== 'created_at' && obj.dbName.split('_')[obj.dbName.split('_').length - 1] === 'goal'){
        return (
          <div className="data-holder-wide">
            <p className="text-small-wide">{obj.title}: </p>
            <p>{obj.value}</p>
          </div>
        )
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
      <div className="view-header-top">
        <div className="view-ids">
          {ids}
        </div>
        <div className="view-clinic">
          {clinic}
        </div>
      </div>
      <div>
        <h3>Primary Concern</h3>
        {concern}
      </div>
      <div className="view-processes">
        <h3>Processes</h3>

          <div className="view-section-container">
            <h4>Modulation:</h4>
            <div className="view-processes-section">
              {processValuesMod}
            </div>
          </div>

          <div className="view-section-container">
            <h4>Postural:</h4>
            <div className="view-processes-section">
              {processValuesPos}
            </div>
          </div>

          <div className="view-section-container">
            <h4>Executive:</h4>
            <div className="view-processes-section">
              {processValuesExec}
            </div>
          </div>

          <div className="view-section-container">
            <h4>Sensory:</h4>
            <div className="view-processes-section">
              {processValuesSen}
            </div>
          </div>

          <div className="view-section-container">
            <h4>Social:</h4>
            <div className="view-processes-section">
              {processValuesSoc}
            </div>
          </div>
        </div>

        <div className="view-section-container">
          <h3>Treatment Plans</h3>
          <div className="view-treatment">
            {treatmentPlan}
          </div>
        </div>

        <div className="view-section-container">
          <h3>Therapy Goals</h3>
          <div className="view-therapy">
            {therapyGoal}
          </div>
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