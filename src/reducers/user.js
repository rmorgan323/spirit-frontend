const user = (store = {}, action) => {
  switch (action.type) {
  case 'USER_TO_STORE': {
    const updatedUser = Object.assign({}, action.user);
    return updatedUser;
  }

  case "UPDATE_USER_STORE":
    let newStore = store
    const keys = Object.keys(action.clinicData)
    const values = Object.values(action.clinicData)

    for (let i = 0; i < keys.length; i++) {
      newStore[keys[i]] = values[i]
    }
    return newStore;

  default:
    return store;
  }
};

export default user;
