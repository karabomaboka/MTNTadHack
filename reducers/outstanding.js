const outstandingReducer = (state = 50, action) => {
  switch (action.type) {
    case "PAY_OFF":
      return state + action.payload;
    case "ADD":
      return state - action.payload;
    default:
      return state;
  }
};

export default outstandingReducer;
