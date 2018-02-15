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

export const getUser = () => async dispatch => {
  try {
    const user = await loadUser();
    dispatch(userToStore(user));
    if (user.clinic_id) {
      const clinic = await loadClinic(user.clinic_id)
      dispatch(clinicToStore(clinic));
      const patient = await loadPatientList(user.id)
      dispatch(patientToStore(patient));
    }
  } catch (error) {
    window.location="https://spirit.e1.loginrocket.com/";
  }
};

export const userToStore = user => ({
  type: 'USER_TO_STORE',
  user
});

export const getPatientConcerns = id => async dispatch => {
  try {
    const concernArray = await loadPatientConcerns(id);
    dispatch(concernArrayToStore(concernArray));
    const patient = await loadPatient(id);
    dispatch(currentPatientToStore(patient));
  } catch (error) {
    console.log(error);
  }
}

export const currentPatientToStore = patient => ({
  type: 'CURRENT_PATIENT_TO_STORE',
  patient
})

export const addConcern = concern => async dispatch => {
  const newConcern = await postPatientConcern(concern)
  console.log(newConcern)
  dispatch(concernToStore(concern))
};

export const concernArrayToStore = concerns => ({
  type: 'CONCERN_ARRAY_TO_STORE',
  concerns
})

export const concernToStore = concern => ({
  type: 'CONCERN_TO_STORE',
  concern
})

export const updateSlider = slider => ({
  type: 'UPDATE_SLIDER_VALUE',
  slider
});

export const getDefinitions = () => async dispatch => {
  try {
    const definitions = await loadDefinitions();
    dispatch(definitionsToStore(definitions));
  } catch (error) {
    console.log(error)
  }
};

export const definitionsToStore = definitions => ({
  type: 'DEFINITIONS_TO_STORE',
  definitions
});

export const saveClinic = (clinicObject, userId) => async dispatch => {
  try {
    const id = await postClinic(clinicObject);
    const clinic = Object.assign({}, {clinic_id: id}, clinicObject)
    const response = await addClinicInfoToUser(clinic, userId);
    dispatch(clinicToStore(clinic))
    dispatch(userToStore({clinic: clinic.name, clinic_abbreviation: clinic.abbreviation, clinic_id: clinic.clinic_id}))
  } catch (error) {
    console.log(error)
  }
};

export const clinicToStore = clinic => ({
  type: 'CLINIC_TO_STORE',
  clinic
});

export const savePatient = (first, last, user, clinicAbbr) => async dispatch => {
  try {
    const patient = await postPatient((clinicAbbr + first + last), user)
    dispatch(patientToStore([patient]))
  } catch (error) {
    console.log(error)
  }
}

export const patientToStore = patient => ({
  type: 'PATIENT_TO_STORE',
  patient
})

