import { combineReducers } from "redux";

import cartItem from "./cartItem";
import subTotal from "./subTotal";
import sumTotal from "./sumTotal";
import address from "./address";
import keySelection from "./keySelection";
import ordersDetails from "./ordersDetails";
import login from "./login";
import onSuccessPTC from "./onSuccessPTC";
import dateTime from "./dateTime";
import confirmationPTC from "./confirmationPTC";

export default combineReducers({
  cartItem,
  subTotal,
  sumTotal,
  address,
  keySelection,
  ordersDetails,
  login,
  onSuccessPTC,
  dateTime,
  confirmationPTC,
});
