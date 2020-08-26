import { combineReducers } from "redux";

import cartItem from "./cartItem";
import countTracking from "./countTracking";
import subTotal from "./subTotal";
import sumTotal from "./sumTotal";
import address from "./address";
import keySelection from "./keySelection";
import ordersDetails from "./ordersDetails";

export default combineReducers({
  cartItem,
  countTracking,
  subTotal,
  sumTotal,
  address,
  keySelection,
  ordersDetails,
});
