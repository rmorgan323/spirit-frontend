import { combineReducers } from 'redux';
import clinic from './clinic';
import user from './user';
import patientList from './patientList';
import currentPatient from './currentPatient';
import patientConcerns from './patientConcerns';
import selectedConcern from './selectedConcern';
import sessions from './sessions';
import selectedSession from './selectedSession';
import selectedProcess from './selectedProcess';
import selectedTherapyGoal from './selectedTherapyGoal';
import selectedTreatmentPlan from './selectedTreatmentPlan';
import storedThreadConnections from './storedThreadConnections';
import definitions from './definitions';
import comparisonData from './comparisonData';

const rootReducer = combineReducers({
  clinic,
  user,
  patientList,
  currentPatient,
  patientConcerns,
  selectedConcern,
  sessions,
  selectedSession,
  selectedProcess,
  selectedTherapyGoal,
  selectedTreatmentPlan,
  storedThreadConnections,
  definitions,
  comparisonData
});

export default rootReducer;
