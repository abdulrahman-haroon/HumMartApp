const address = (state = [], action) => {
  switch (action.type) {
    case "ADDRESSES":
      return action.payload;
  }
  return state;
};
export default address;
