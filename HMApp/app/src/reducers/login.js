let initialValues = {
  loginSuccess: false,
  mobileNumber: 0,
};
const login = (state = initialValues, action) => {
  switch (action.type) {
    case "CREDENTIALS":
      return action.payload;
  }
  return state;
};
export default login;
