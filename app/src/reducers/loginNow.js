const loginNow = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_CONFIRMED":
      return action.loginConfirmed;
  }
  return state;
};

export default loginNow;
