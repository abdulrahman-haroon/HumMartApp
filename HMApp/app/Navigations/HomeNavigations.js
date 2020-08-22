import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import ListItemSearch from "../component/Lists/ListItemSearch";
import Home from "../Screens/home";
import OffersTabNavigation from "./OffersTabNavigation";
import MobilesTabNavigation from "./MobilesTabNavigation";
import MobilesAccessoriesTabNavigation from "./MobilesAccessoriesTabNavigation";
import GroomingProductsTabNavigation from "./GroomingProductsTabNavigation";
import BathBodyTabNavigations from "./BathBodyTabNavigations";
import HairCareTabNavigation from "./HairCareTabNavigation";
import Card from "../component/Cards/Card";

const Stack = createStackNavigator();
const HomeNavigations = () => (
  <Stack.Navigator
    screenOptions={{
      animationEnabled: false,
      headerShown: false,
    }}
    initialRouteName={routes.HOME}
  >
    <Stack.Screen
      name={routes.HOME}
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.LIST_ITEM_SEARCH} component={ListItemSearch} />
    <Stack.Screen name={routes.OFFERSTAB} component={OffersTabNavigation} />
    <Stack.Screen name={routes.MOBILETAB} component={MobilesTabNavigation} />
    <Stack.Screen
      name={routes.MOBILE_ACCESSORIES}
      component={MobilesAccessoriesTabNavigation}
    />
    <Stack.Screen
      name={routes.GROOMING_PRODUCTS}
      component={GroomingProductsTabNavigation}
    />
    <Stack.Screen name={routes.BATH_BODY} component={BathBodyTabNavigations} />
    <Stack.Screen name={routes.HAIR_CARE} component={HairCareTabNavigation} />
    <Stack.Screen name={routes.CARD} component={Card} />
  </Stack.Navigator>
);
export default HomeNavigations;
