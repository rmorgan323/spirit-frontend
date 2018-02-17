const selectedTreatmentPlan = (store = {}, action) => {
  switch (action.type) {
    case 'SELECTED_TREATMENT_PLAN_TO_STORE':
      return action.selectedTreatmentPlan;

    default:
      return store;
  }
}

export default selectedTreatmentPlan;