import React from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  ConditionerFunction,
  ShampooFunction,
} from "../Callings/TabsScreenFunctions";

import color from "../styles/color";
import fonts from "../styles/fonts";

import HeaderNavigation from "../component/HeaderNavigation";

const HairCareTab = createMaterialTopTabNavigator();
export const HairCareTabNavigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        showPromotion
        navigation={navigation}
        title="Hair Care"
      />
      <HairCareTab.Navigator
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
        <HairCareTab.Screen
          options={{ tabBarLabel: "Shampoo" }}
          name="Shampoo"
          component={ShampooFunction}
        />
        <HairCareTab.Screen
          options={{ tabBarLabel: "Conditioner" }}
          name="Conditioner"
          component={ConditionerFunction}
        />
      </HairCareTab.Navigator>
    </View>
  );
};
export default HairCareTabNavigation;
