import { combineReducers } from 'redux';
import user from './user';
import patientConcerns from './patientConcerns';

const rootReducer = combineReducers({
  user,
  patientConcerns
});

export default rootReducer;