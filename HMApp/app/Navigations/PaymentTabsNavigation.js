import React from "react";
import { View, Text } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import routes from "./routes";
import fonts from "../styles/fonts";
import color from "../styles/color";

const COD = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text
      style={{
        fontFamily: fonts.sst,
        color: color.lightdarkGray,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      Please pay amount to the delivery executive
    </Text>
  </View>
);
const Easypaisa = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text
      style={{
        fontFamily: fonts.sst,
        color: color.lightdarkGray,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      Please tap on place order, you will be redirected to Easypaisa.
    </Text>
  </View>
);
const JazzCashMobile = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text
      style={{
        fontFamily: fonts.sst,
        color: color.lightdarkGray,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      JazzCash Mobile Account can be registered on any Jazz or Warid number
      Biometric-verified jaz and Warid customers can self-register thier Mobile
      Account simply by dialing *786#.
    </Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();
const PaymentTabsNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      indicatorStyle: { height: 3, backgroundColor: "green" },
      labelStyle: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "none",
        fontFamily: fonts.ssl,
      },
      tabStyle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: color.lightdarkGray,
        borderBottomColor: color.lightdarkGray,
      },
    }}
  >
    <Tab.Screen
      name={routes.CASH_ON_DELIVERY}
      component={COD}
      options={{ title: "Cash on Delivery" }}
    />
    <Tab.Screen name={routes.EASYPAISA} component={Easypaisa} />
    <Tab.Screen name={routes.JAZZ_CASH_MOBILE} component={JazzCashMobile} />
  </Tab.Navigator>
);
export default PaymentTabsNavigation;
