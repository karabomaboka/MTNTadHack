const outstandingReducer = (state = 0, action) => {
  switch (action.type) {
    case "PAY_OFF":
      const temp = action.payload == state ? 0.0 : state - action.payload;
      return temp;
    case "ADD":
      return state + action.payload;
    default:
      return state;
  }
};

export default outstandingReducer;
