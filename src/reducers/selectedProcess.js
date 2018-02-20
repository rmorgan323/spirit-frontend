const selectedProcess = (store = {}, action) => {
  switch (action.type) {
  case 'SELECTED_PROCESS_TO_STORE':
    return action.selectedProcess;

  case 'UPDATE_PROCESS_COMPONENT': {
    let newProcess = store;
    const componentKey = Object.keys(action.updatedProcess)[0];
    const componentValue = Object.values(action.updatedProcess)[0];

    Object.keys(newProcess).forEach(component => {
      if (component === componentKey) {
        newProcess[componentKey] = componentValue;
      }
    });

    return newProcess;
  }

  default:
    return store;
  }
};

export default selectedProcess;
