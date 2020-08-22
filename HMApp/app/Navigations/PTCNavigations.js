import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import PTC_AddressTime from "../Screens/ProceedToCheckout/PTC_AddressTime";
import Cart from "../Screens/Cart";
import PTC_PlaceOrder from "../Screens/ProceedToCheckout/PTC_PlaceOrder";

const Stack = createStackNavigator();
const PTCNavigations = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animationEnabled: false }}
  >
    <Stack.Screen name={routes.PTC_ADDRESS_TIME} component={PTC_AddressTime} />
    <Stack.Screen name={routes.PTC_PLACE_ORDER} component={PTC_PlaceOrder} />
  </Stack.Navigator>
);
export default PTCNavigations;
