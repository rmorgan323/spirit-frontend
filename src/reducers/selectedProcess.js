const selectedProcess = (store = {}, action) => {
  switch (action.type) {
    case 'SELECTED_PROCESS_TO_STORE':
      return action.selectedProcess;

    default:
      return store;
  }
}

export default selectedProcess;