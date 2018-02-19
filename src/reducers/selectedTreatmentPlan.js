const selectedTreatmentPlan = (store = {}, action) => {
  switch (action.type) {
    case 'SELECTED_TREATMENT_PLAN_TO_STORE':
      return action.selectedTreatmentPlan;

    case 'UPDATE_TREATMENT_PLAN':
      let newTreatmentPlan = store;
      const updatedKey = Object.keys(action.updatedTreatmentPlan)[0];
      const updatedValue = Object.values(action.updatedTreatmentPlan)[0];

      Object.keys(newTreatmentPlan).forEach(key => {
        if (key === updatedKey) {
          newTreatmentPlan[updatedKey] = updatedValue;
        }
      });

      return newTreatmentPlan;

    default:
      return store;
  }
};

export default selectedTreatmentPlan;
