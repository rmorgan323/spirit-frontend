const user = (store = {}, action) => {
  switch (action.type) {
  case 'USER_TO_STORE':
    const updatedUser = Object.assign({}, action.user);
    return updatedUser;

  default:
    return store;
  }
};

export default user;
