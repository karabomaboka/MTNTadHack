export const createUser = (user) => {
  return (dispatch, getState) => {
    // async call to database
    dispatch({
      type: "ADD_USER",
      user,
    });
  };
};
