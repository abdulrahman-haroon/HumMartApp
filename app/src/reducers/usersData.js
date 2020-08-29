const usersData = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER_DETAILS":
      return [...state, action.payload];
    case "UPDATE_USER_DETAILS":
      return state.map((item, index) => {
        if (item.mobileNumber === action.phoneNo) {
          return {
            ...item,
            orderDetailsData: [...item.orderDetailsData, action.payload],
          };
        }
        return item;
      });
  }
  return state;
};

export default usersData;
