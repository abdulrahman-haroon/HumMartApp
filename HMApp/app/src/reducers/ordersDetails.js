const ordersDetails = (state = [], action) => {
  switch (action.type) {
    case "ADD_ORDERS_DETAILS":
      return [...state, action.payload];
  }
  return state;
};
export default ordersDetails;
