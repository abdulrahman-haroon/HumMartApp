const comfirmationPTC = (state = "No", action) => {
  switch (action.type) {
    case "ADD_CONFIRMATION":
      return action.confirmYes;
    case "NO_CONFIRM":
      return (state = "No");
  }
  return state;
};
export default comfirmationPTC;
