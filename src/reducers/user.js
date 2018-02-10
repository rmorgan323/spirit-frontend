const user = (store = {}, action) => {
  switch (action.type) {
    case "USER_TO_STORE":
      return action.user;

    default:
      return store;
  }
};

export default user;