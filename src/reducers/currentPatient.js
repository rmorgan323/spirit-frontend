const currentPatient = (store = {}, action) => {
  switch (action.type) {
    case 'CURRENT_PATIENT_TO_STORE':
      return action.patient;

    default:
      return store;
  }
};

export default currentPatient;
