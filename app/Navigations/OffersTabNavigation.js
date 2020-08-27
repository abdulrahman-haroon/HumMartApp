import React from "react";
import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  BundleDealsFunction,
  CartoonFunction,
  DiscountedItemsFunction,
} from "../Callings/TabsScreenFunctions";

import color from "../styles/color";
import fonts from "../styles/fonts";

import HeaderNavigation from "../component/HeaderNavigation";

const OffersTab = createMaterialTopTabNavigator();
const OffersTabNavigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation showPromotion navigation={navigation} title="Offers" />
      <OffersTab.Navigator
        initialRouteName="CartoonsTab"
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
        <OffersTab.Screen
          options={{ tabBarLabel: "Cartons" }}
          name="CartoonsTab"
          component={CartoonFunction}
        />
        <OffersTab.Screen
          options={{ tabBarLabel: "Bundle Deals" }}
          name="BundleDeals"
          component={BundleDealsFunction}
        />
        <OffersTab.Screen
          options={{ tabBarLabel: "Discounted Items" }}
          name="DiscountedItems"
          component={DiscountedItemsFunction}
        />
      </OffersTab.Navigator>
    </View>
  );
};
export default OffersTabNavigation;
