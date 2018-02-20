import markedThreadConnections from '../data/markedThreadConnections';

const storedThreadConnections = (store = markedThreadConnections, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

export default storedThreadConnections;
