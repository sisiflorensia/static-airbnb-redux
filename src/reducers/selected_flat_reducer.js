const selectedFlatReducer = (state, action) => {
  if (state === undefined) {
    // Reducer inital action
    return [];
  }

  // if (action.type === 'SET_FLATS') {
  //   return action.payload;
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case 'SELECT_FLAT':
      return action.payload;
    default:
      return state;
  }
};

export default selectedFlatReducer;
