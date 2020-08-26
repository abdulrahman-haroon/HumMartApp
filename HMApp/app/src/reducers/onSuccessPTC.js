let initializeValue = {
  onSuccess: false,
};

const onSuccessPTC = (state = initializeValue, action) => {
  switch (action.type) {
    case "SUCCESS":
      return action.Confirmation;
  }
  return state;
};
export default onSuccessPTC;
