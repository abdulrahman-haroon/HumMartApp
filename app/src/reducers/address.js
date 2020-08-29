const address = (state = [], action) => {
  switch (action.type) {
    case "ADDRESSES_ADD":
      return [...state, action.payload];
    case "ADDRESS_REMOVE":
      return state.filter((address) => state.houseNo != address.houseNo);
    case "ADDRESS_UPDATE":
      return (state = action.payload);
    case "EMPTY_ADDRESSES":
      return (state = []);
  }
  return state;
};
export default address;
