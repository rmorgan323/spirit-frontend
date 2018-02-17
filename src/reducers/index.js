import { combineReducers } from 'redux';
import clinic from './clinic';
import user from './user';
import patientList from './patientList';
import currentPatient from './currentPatient';
import patientConcerns from './patientConcerns';
import selectedConcern from './selectedConcern';
import sessions from './sessions';
import selectedSession from './selectedSession';
import patientSliders from './patientSliders';
import definitions from './definitions';

const rootReducer = combineReducers({
  clinic,
  user,
  patientList,
  currentPatient,
  patientConcerns,
  selectedConcern,
  sessions,
  selectedSession,
  patientSliders,
  definitions
});

export default rootReducer;