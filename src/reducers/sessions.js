const sessions = (store = [], action) => {
  switch (action.type) {
  case 'SESSIONS_TO_STORE':
    return action.sessions;

  case 'UPDATE_SESSIONS_ARRAY':
    let newStore = [].slice.call(store);
    const id = action.sessionId;
    const status = action.status;
    const sessionToUpdate = newStore.find(index => index.id === id)
    sessionToUpdate[Object.keys(action.status)] = Object.values(action.status)[0]

    return newStore;



  default:
    return store;
  }
};

export default sessions;
