import markedThreadConnections from '../data/markedThreadConnections';

const storedThreadConnections = (store = markedThreadConnections, action) => {
  switch (action.type) {
  case 'CHECK_THREAD_CONNECTIONS': {
    let selectedConnections = store;
    const processKeys = Object.keys(action.selectedProcess);

    processKeys.forEach(component => {
      if (action.selectedProcess[component] !== null) {
        selectedConnections[component] = true;
      }
    })

    return selectedConnections;
  }

  case 'UPDATE_THREAD_CONNECTIONS': {
    let newConnections = store;

    action.threadConnections.forEach(
      connection => (newConnections[connection] = true)
    );

    return newConnections;
  }

  default:
    return store;
  }
};

export default storedThreadConnections;
