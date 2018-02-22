const processesData = (store = {}, action) => {
  switch (action.type) {
    case 'PROCESSES_DATA_TO_STORE':
      return action.cleanProcesses;

  default:
    return store;
  }
};

export default processesData;