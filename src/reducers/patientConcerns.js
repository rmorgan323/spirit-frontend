const patientConcerns = (store = [], action) => {
  switch (action.type) {
    case "CONCERN_TO_STORE":
      const newConcern = [...store, action.concernObject]

      return newConcern;

    default:
      return store;
  }
};

export default patientConcerns;