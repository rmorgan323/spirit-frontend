const selectedSession = (store = {}, action) => {
  switch (action.type) {
    case 'SELECTED_SESSION_TO_STORE':
      return action.selectedSession;

    default:
      return store;
  }
}

export default selectedSession;