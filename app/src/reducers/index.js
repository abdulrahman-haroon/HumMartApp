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
import usersData from "./usersData";
import globalIndexAuth from "./globalIndexAuth";
import localIndex from "./localIndex";
import innerIncrement from "./innerIncrement";
import sameMobileNo from "./sameMobileNo";
import loginNow from "./loginNow";

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
  usersData,
  globalIndexAuth,
  localIndex,
  innerIncrement,
  sameMobileNo,
  loginNow,
});
