import markedThreadConnections from '../data/markedThreadConnections';
import getThreadConnections from '../helpers/getThreadConnections/getThreadConnections';

const storedThreadConnections = (store = markedThreadConnections, action) => {
  switch (action.type) {
  case 'CHECK_THREAD_CONNECTIONS': {
    let selectedConnections = store;
    const processKeys = Object.keys(action.selectedProcess);
    const storeKeys = Object.keys(selectedConnections);

    processKeys.forEach(component => {
      storeKeys.forEach(key => {
        if (component === key && action.selectedProcess[component] !== null) {
          const threadConnections = getThreadConnections({
            [component]: action.selectedProcess[component]
          });

          threadConnections.forEach(
            connection => (selectedConnections[connection] = true)
          );
        }
      });
    });

    return selectedConnections;
  }

  case 'UPDATE_THREAD_CONNECTIONS': {
    const connectionsObject = action.threadConnections.reduce((connectionsObject, connection) => {
      connectionsObject[connection] = true;

      return connectionsObject
    }, {});
    console.log(connectionsObject)
    const newConnections = Object.assign({}, store, connectionsObject);

    return newConnections;
  }

  default:
    return store;
  }
};

export default storedThreadConnections;
