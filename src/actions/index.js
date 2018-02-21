/*eslint-disable max-len*/
/*eslint-disable camelcase*/

import loadUser from '../helpers/loadUser/loadUser';
import loadDefinitions from '../helpers/loadDefinitions/loadDefinitions';
import postClinic from '../helpers/postClinic/postClinic';
import addClinicInfoToUser from '../helpers/addClinicInfoToUser/addClinicInfoToUser';
import loadClinic from '../helpers/loadClinic/loadClinic';
import postPatient from '../helpers/postPatient/postPatient';
import loadPatientList from '../helpers/loadPatientList/loadPatientList';
import loadPatientConcerns from '../helpers/loadPatientConcerns/loadPatientConcerns';
import loadPatient from '../helpers/loadPatient/loadPatient';
import postPatientConcern from '../helpers/postPatientConcern/postPatientConcern';
import loadPatientConcernById from '../helpers/loadPatientConcernById/loadPatientConcernById';
import loadSessionsList from '../helpers/loadSessionsList/loadSessionsList';
import postSession from '../helpers/postSession/postSession';
import postProcess from '../helpers/postProcess/postProcess';
import postTherapyGoal from '../helpers/postTherapyGoal/postTherapyGoal';
import postTreamentPlan from '../helpers/postTreatmentPlan/postTreatmentPlan';
import loadProcessBySession from '../helpers/loadProcessBySession/loadProcessBySession';
import loadTherapyGoalBySession from '../helpers/loadTherapyGoalBySession/loadTherapyGoalBySession';
import loadTreatmentPlanBySession from '../helpers/loadTreatmentPlanBySession/loadTreatmentPlanBySession';
import getThreadConnections from '../helpers/getThreadConnections/getThreadConnections';
import updateProcess from '../helpers/updateProcess/updateProcess';
import updateTreatmentPlan from '../helpers/updateTreatmentPlan/updateTreatmentPlan';
import updateTherapyGoal from '../helpers/updateTherapyGoal/updateTherapyGoal';
import joinClinic from '../helpers/joinClinic/joinClinic';

export const getUser = () => async dispatch => {
  try {
    const user = await loadUser();
    dispatch(userToStore(user));
    if (user.clinic_id) {
      const clinic = await loadClinic(user.clinic_id);
      dispatch(clinicToStore(clinic));
      const patient = await loadPatientList(user.id);
      dispatch(patientToStore(patient));
    }
  } catch (error) {
    window.location = 'https://spirit.e1.loginrocket.com/';
  }
};

export const userToStore = user => ({
  type: 'USER_TO_STORE',
  user
});

export const getPatientConcerns = id => async dispatch => {
  const concernArray = await loadPatientConcerns(id);
  dispatch(concernArrayToStore(concernArray));
  const patient = await loadPatient(id);
  dispatch(currentPatientToStore(patient));
};

export const currentPatientToStore = patient => ({
  type: 'CURRENT_PATIENT_TO_STORE',
  patient
});

export const concernArrayToStore = concerns => ({
  type: 'CONCERN_ARRAY_TO_STORE',
  concerns
});

export const getConcern = concernId => async dispatch => {
  const concern = await loadPatientConcernById(concernId);
  dispatch(selectedConcernToStore(concern));
  const sessions = await loadSessionsList(concernId);
  dispatch(sessionsArrayToStore(sessions));
};

export const selectedConcernToStore = selectedConcern => ({
  type: 'SELECTED_CONCERN_TO_STORE',
  selectedConcern
});

export const sessionsArrayToStore = sessions => ({
  type: 'SESSIONS_TO_STORE',
  sessions
});

export const createSession = selectedConcernId => async dispatch => {
  const newSession = await postSession(selectedConcernId);
  await postProcess(newSession[0]);
  await postTherapyGoal(newSession[0]);
  await postTreamentPlan(newSession[0]);

  const newSessionsArray = await loadSessionsList(selectedConcernId);
  dispatch(sessionsArrayToStore(newSessionsArray));
};

export const getSession = selectedSession => async dispatch => {
  dispatch(selectedSessionToStore(selectedSession));

  const selectedProcess = await loadProcessBySession(selectedSession.id);
  dispatch(selectedProcessToStore(selectedProcess[0]));
  dispatch(checkThreadConnections(selectedProcess[0]))

  const selectedTherapyGoal = await loadTherapyGoalBySession(
    selectedSession.id
  );
  dispatch(selectedTherapyGoalToStore(selectedTherapyGoal[0]));

  const selectedTreatmentPlan = await loadTreatmentPlanBySession(
    selectedSession.id
  );
  dispatch(selectedTreatmentPlanToStore(selectedTreatmentPlan[0]));
};

export const selectedSessionToStore = selectedSession => ({
  type: 'SELECTED_SESSION_TO_STORE',
  selectedSession
});

export const selectedProcessToStore = selectedProcess => ({
  type: 'SELECTED_PROCESS_TO_STORE',
  selectedProcess
});

export const selectedTherapyGoalToStore = selectedTherapyGoal => ({
  type: 'SELECTED_THERAPY_GOAL_TO_STORE',
  selectedTherapyGoal
});

export const selectedTreatmentPlanToStore = selectedTreatmentPlan => ({
  type: 'SELECTED_TREATMENT_PLAN_TO_STORE',
  selectedTreatmentPlan
});

export const addConcern = (patientId, concern) => async dispatch => {
  await postPatientConcern(concern);
  dispatch(concernToStore(concern));

  const newConcerns = await loadPatientConcerns(patientId);
  dispatch(concernArrayToStore(newConcerns));
};

export const concernToStore = concern => ({
  type: 'CONCERN_TO_STORE',
  concern
});

export const updateProcessPerformanceComponent = (
  processId,
  updatedProcess
) => async dispatch => {
  await updateProcess(processId, updatedProcess);
  dispatch(updateProcessComponent(updatedProcess));

  const threadConnections = await getThreadConnections(updatedProcess);
  dispatch(updateThreadConnections(threadConnections));
};

export const checkThreadConnections = selectedProcess => ({
  type: 'CHECK_THREAD_CONNECTIONS',
  selectedProcess
});

export const updateThreadConnections = threadConnections => ({
  type: 'UPDATE_THREAD_CONNECTIONS',
  threadConnections
});

export const updateProcessComponent = updatedProcess => ({
  type: 'UPDATE_PROCESS_COMPONENT',
  updatedProcess
});

export const getTreatmentPlan = (
  treatmentPlanId,
  updatedTreatmentPlan
) => async dispatch => {
  await updateTreatmentPlan(treatmentPlanId, updatedTreatmentPlan);
  dispatch(updatedTreatmentPlanToStore(updatedTreatmentPlan));
};

export const updatedTreatmentPlanToStore = updatedTreatmentPlan => ({
  type: 'UPDATE_TREATMENT_PLAN',
  updatedTreatmentPlan
});

export const getTherapyGoal = (therapyGoalId, goalObj) => async dispatch => {
  await updateTherapyGoal(therapyGoalId, goalObj);
  dispatch(updatedTherapyGoalToStore(goalObj));
};

export const updatedTherapyGoalToStore = updatedTherapyGoal => ({
  type: 'UPDATE_THERAPY_GOAL',
  updatedTherapyGoal
});

export const getDefinitions = () => async dispatch => {
  const definitions = await loadDefinitions();
  dispatch(definitionsToStore(definitions));
};

export const definitionsToStore = definitions => ({
  type: 'DEFINITIONS_TO_STORE',
  definitions
});

export const saveClinic = (clinicObject, userId) => async dispatch => {
  const id = await postClinic(clinicObject);
  const clinic = Object.assign({}, { clinic_id: id }, clinicObject);
  await addClinicInfoToUser(clinic, userId);
  dispatch(clinicToStore(clinic));
  dispatch(
    updateUserStore({
      clinic: clinic.name,
      clinic_abbreviation: clinic.abbreviation,
      clinic_id: clinic.clinic_id,
      clinic_passcode: clinic.passcode
    })
  );
};

export const clinicToStore = clinic => ({
  type: 'CLINIC_TO_STORE',
  clinic
});

export const savePatient = (
  first,
  last,
  user,
  clinicAbbr
) => async dispatch => {
  const patient = await postPatient(clinicAbbr + first + last, user);
  dispatch(patientToStore([patient]));
};

export const patientToStore = patient => ({
  type: 'PATIENT_TO_STORE',
  patient
});

export const updateUserStore = clinicData => ({
  type: 'UPDATE_USER_STORE',
  clinicData
});

export const joinExistingClinic = (passcode, userId) => async dispatch => {
  const updatedClinic = await joinClinic(passcode, userId);
  dispatch(updateUserStore(updatedClinic));
  dispatch(
    clinicToStore({
      id: updatedClinic.clinic_id,
      name: updatedClinic.clinic,
      abbreviation: updatedClinic.clinic_abbreviation,
      passcode: updatedClinic.clinic_passcode
    })
  );
};
