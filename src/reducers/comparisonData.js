const comparisonData = (store = {}, action) => {
  switch (action.type) {
  case 'COMPARISON_DATA_TO_STORE':
    return action.cleanData;

  default:
    return store;
  }
};

export default comparisonData;