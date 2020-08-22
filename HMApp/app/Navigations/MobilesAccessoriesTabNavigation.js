import React from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MobileAccessoriesFunction } from "../Callings/TabsScreenFunctions";

import color from "../styles/color";
import fonts from "../styles/fonts";

import HeaderNavigation from "../component/HeaderNavigation";

const MobilesAccessoriesTab = createMaterialTopTabNavigator();
export const MobilesAccessoriesTabNavigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        showPromotion
        navigation={navigation}
        title="Mobile Accessories"
      />
      <MobilesAccessoriesTab.Navigator
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
        <MobilesAccessoriesTab.Screen
          options={{ tabBarLabel: "Mobile Accessories" }}
          name="MobileAccessories"
          component={MobileAccessoriesFunction}
        />
      </MobilesAccessoriesTab.Navigator>
    </View>
  );
};
export default MobilesAccessoriesTabNavigation;
