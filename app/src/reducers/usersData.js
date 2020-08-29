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
    case "UPDATE_ADDRESS_DETAILS":
      return state.map((item, index) => {
        if (item.mobileNumber === action.phoneNo) {
          return {
            ...item,
            userAllAddress: [...item.userAllAddress, action.allAddress],
          };
        }
        return item;
      });
    case "DELETE_ADDRESS_DETAILS":
      return state.map((item, index) => {
        if (item.mobileNumber === action.phoneNo) {
          return {
            ...item,
            userAllAddress: item.userAllAddress.filter(
              (name) => action.houseNo != name.houseNo
            ),
          };
        }
        return item;
      });
  }
  return state;
};

export default usersData;
