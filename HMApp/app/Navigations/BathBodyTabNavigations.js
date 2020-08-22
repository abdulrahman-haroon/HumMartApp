import React from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  HandwashFunction,
  ShowerGelFunction,
  SoapFunction,
} from "../Callings/TabsScreenFunctions";

import color from "../styles/color";
import fonts from "../styles/fonts";

import HeaderNavigation from "../component/HeaderNavigation";

const BathBodyTab = createMaterialTopTabNavigator();
export const BathBodyTabNavigations = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        showPromotion
        navigation={navigation}
        title="Bath & Body"
      />
      <BathBodyTab.Navigator
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
        <BathBodyTab.Screen
          options={{ tabBarLabel: "Shower Gels & Creams" }}
          name="ShowerGel"
          component={ShowerGelFunction}
        />
        <BathBodyTab.Screen
          options={{ tabBarLabel: "Soaps" }}
          name="Soaps"
          component={SoapFunction}
        />
        <BathBodyTab.Screen
          options={{ tabBarLabel: "Handwash" }}
          name="Handwash"
          component={HandwashFunction}
        />
      </BathBodyTab.Navigator>
    </View>
  );
};
export default BathBodyTabNavigations;
