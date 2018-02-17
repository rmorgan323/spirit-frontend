const selectedTherapyGoal = (store = {}, action) => {
  switch (action.type) {
    case 'SELECTED_THERAPY_GOAL_TO_STORE':
      return action.selectedTherapyGoal;

    default:
      return store;
  }
}

export default selectedTherapyGoal;