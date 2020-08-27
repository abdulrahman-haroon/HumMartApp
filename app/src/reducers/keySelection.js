const keySelection = (state = 0, action) => {
  switch (action.type) {
    case "ADDRESS_SELECTION":
      return action.addressSelected;
  }
  return state;
};
export default keySelection;
