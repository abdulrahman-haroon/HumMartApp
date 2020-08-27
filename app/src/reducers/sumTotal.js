import React from "react";

let initializeValues = {
  totalPrice: 0,
};
const sumTotal = (state = initializeValues, action) => {
  switch (action.type) {
    case "TOTAL":
      return { totalPrice: action.total };
  }
  return state;
};
export default sumTotal;
