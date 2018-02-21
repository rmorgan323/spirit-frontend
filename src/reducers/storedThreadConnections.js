import markedThreadConnections from '../data/markedThreadConnections';

const storedThreadConnections = (store = markedThreadConnections, action) => {
  switch (action.type) {
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
