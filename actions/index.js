export const payoff = (nr) => {
  return {
    type: "PAY_OFF",
    payload: nr,
  };
};
export const decrement = (nr) => {
  return {
    type: "ADD",
    payload: nr,
  };
};

export const login_logout = () => {
  return {
    type: "SIGN_IN",
  };
};
