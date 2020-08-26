import React from "react";

let initializeValues = {
  sTotal: 0,
};
const subTotal = (state = initializeValues, action) => {
  switch (action.type) {
    case "SUB_TOTAL":
      return { sTotal: action.subTotal };
  }
  return state;
};
export default subTotal;
