import React from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  AppleFunction,
  HuaweiFunction,
  ItelFunction,
} from "../Callings/TabsScreenFunctions";

import color from "../styles/color";
import fonts from "../styles/fonts";

import HeaderNavigation from "../component/HeaderNavigation";

const MobileTab = createMaterialTopTabNavigator();
const MobilesTabNavigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        showPromotion
        navigation={navigation}
        title={"Mobiles"}
      />
      <MobileTab.Navigator
        tabBarOptions={{
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
          indicatorStyle: {
            height: 3,
            backgroundColor: "green",
          },
        }}
      >
        <MobileTab.Screen
          options={{ tabBarLabel: "Apple" }}
          name="Apple"
          component={AppleFunction}
        />

        <MobileTab.Screen
          options={{ tabBarLabel: "Huawei" }}
          name="Huawei"
          component={HuaweiFunction}
        />
        <MobileTab.Screen
          options={{ tabBarLabel: "Itel" }}
          name="Itel"
          component={ItelFunction}
        />
      </MobileTab.Navigator>
    </View>
  );
};
export default MobilesTabNavigation;
