const cartItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_TO_CART":
      return state.filter(
        (cartItem) => cartItem.description !== action.payload.description
      );
    case "EMPTY_CART":
      return (state = []);
  }
  return state;
};

export default cartItems;
