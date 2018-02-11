import { combineReducers } from 'redux';
import user from './user';
import patientConcerns from './patientConcerns';
import patientSliders from './patientSliders';

const rootReducer = combineReducers({
  user,
  patientConcerns,
  patientSliders
});

export default rootReducer;