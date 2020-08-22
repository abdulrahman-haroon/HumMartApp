import React from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { GroomingProductsFunction } from "../Callings/TabsScreenFunctions";

import color from "../styles/color";
import fonts from "../styles/fonts";

import HeaderNavigation from "../component/HeaderNavigation";

const GroomingProductsTab = createMaterialTopTabNavigator();
export const GroomingProductsTabNavigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        showPromotion
        navigation={navigation}
        title="Grooming Products"
      />
      <GroomingProductsTab.Navigator
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
        <GroomingProductsTab.Screen
          options={{ tabBarLabel: "Grooming Products" }}
          name="MobileAccessories"
          component={GroomingProductsFunction}
        />
      </GroomingProductsTab.Navigator>
    </View>
  );
};
export default GroomingProductsTabNavigation;
