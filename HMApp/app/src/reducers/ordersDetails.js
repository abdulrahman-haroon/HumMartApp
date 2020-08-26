const ordersDetails = (state = [], action) => {
  switch (action.type) {
    case "ADD_ORDERS_DETAILS":
      return [action.payload, ...state];
  }
  return state;
};
export default ordersDetails;
