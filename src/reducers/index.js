import { combineReducers } from 'redux';
import user from './user';
import patientConcerns from './patientConcerns';
import patientSliders from './patientSliders';
import definitions from './definitions';
import clinic from './clinic';
import patientList from './patientList';
import currentPatient from './currentPatient';

const rootReducer = combineReducers({
  user,
  clinic,
  currentPatient,
  patientList,
  patientConcerns,
  patientSliders,
  definitions
});

export default rootReducer;