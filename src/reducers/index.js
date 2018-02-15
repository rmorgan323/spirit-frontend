import { combineReducers } from 'redux';
import user from './user';
import patientConcerns from './patientConcerns';
import patientSliders from './patientSliders';
import definitions from './definitions';
import clinic from './clinic';
import patientList from './patientList';

const rootReducer = combineReducers({
  user,
  clinic,
  patientList,
  patientConcerns,
  patientSliders,
  definitions
});

export default rootReducer;