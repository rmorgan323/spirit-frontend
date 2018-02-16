const sessions = (store = [], action) => {
  switch (action.type) {
    case 'SESSIONS_TO_STORE':
      return action.sessions;

    default:
      return store;
  }
}

export default sessions;