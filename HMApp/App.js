import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import WelcomeLoad from "./app/Screens/welcomeLoading";
import Login from "./app/Screens/login";
import Home from "./app/Screens/home";
import Header from "./app/styles/header";

import fonts from "./app/styles/fonts";
import Card from "./app/component/Card";
import color from "./app/styles/color";

import ListItemSearch from "./app/component/ListItemSearch";
import PracticeFlatscreen from "./app/Screens/PracticeFlatscreen";
import DrawerStyle from "./app/styles/DrawerStyle";
import NeedHelp from "./app/Screens/NeedHelp";
import TermsAndCondition from "./app/Screens/TermsAndCondition";
import ContactUs from "./app/Screens/ContactUs";
import AboutUs from "./app/Screens/AboutUs";
import PrivacyPolicy from "./app/Screens/PrivacyPolicy";
import CartoonsTab from "./app/Screens/CartoonsTab";
import BundleDealsTab from "./app/Screens/BundleDealsTab";
import DiscountedItemsTab from "./app/Screens/DiscountedItemsTab";
import MyTabBar from "./app/component/MyTabBar";
import HeaderNavigation from "./app/component/HeaderNavigation";
import Apple from "./app/Screens/Apple";
import Huawei from "./app/Screens/Huawei";
import Itel from "./app/Screens/Itel";
import MobileAccessories from "./app/Screens/MobileAccessories";
import GroomingProducts from "./app/Screens/GroomingProducts";
import ShowerGel from "./app/Screens/ShowerGel";
import Soaps from "./app/Screens/Soaps";
import Handwash from "./app/Screens/Handwash";
import Shampoo from "./app/Screens/Shampoo";
import Conditioner from "./app/Screens/Conditioner";

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#515151" },
        headerTitleStyle: { color: "white", fontFamily: fonts.sst },
        headerTitle: () => <Header />,
        headerLeft: () => (
          <Entypo
            name="menu"
            size={24}
            color="white"
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <FontAwesome5
            name="shopping-cart"
            size={24}
            color="white"
            style={{ paddingRight: 15 }}
            onPress={() => console.log("Shopping cart is pressed.")}
          />
        ),
      }}
      name="Home"
      component={Home}
    />
  </HomeStack.Navigator>
);
const LoginStack = createStackNavigator();
const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      options={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#515151" },
        headerTitleStyle: { color: "white", fontFamily: fonts.sst },
        headerLeft: () => (
          <AntDesign
            name="close"
            size={24}
            color="white"
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
      name="Login"
      component={Login}
    />
  </LoginStack.Navigator>
);
const ListItemSearchpass = ({ navigation }) => (
  <ListItemSearch navigation={navigation} totalItems="17" />
);
const OffersTab = createMaterialTopTabNavigator();
const OffersTabScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation showPromotion navigation={navigation} title="Offers" />
      <OffersTab.Navigator
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
          component={CartoonsTab}
        />
        <OffersTab.Screen
          options={{ tabBarLabel: "Bundle Deals" }}
          name="BundleDeals"
          component={BundleDealsTab}
        />
        <OffersTab.Screen
          options={{ tabBarLabel: "Discounted Items" }}
          name="DiscountedItems"
          component={DiscountedItemsTab}
        />
      </OffersTab.Navigator>
    </View>
  );
};
const MobileTab = createMaterialTopTabNavigator();
const MobileTabScreen = ({ navigation }) => {
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
          component={Apple}
        />

        <MobileTab.Screen
          options={{ tabBarLabel: "Huawei" }}
          name="Huawei"
          component={Huawei}
        />
        <MobileTab.Screen
          options={{ tabBarLabel: "Itel" }}
          name="Itel"
          component={Itel}
        />
      </MobileTab.Navigator>
    </View>
  );
};
const MobilesAccessoriesTab = createMaterialTopTabNavigator();
const MobilesAccessoriesTabScreen = ({ navigation }) => {
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
          component={MobileAccessories}
        />
      </MobilesAccessoriesTab.Navigator>
    </View>
  );
};
const GroomingProductsTab = createMaterialTopTabNavigator();
const GroomingProductsTabScreen = ({ navigation }) => {
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
          component={GroomingProducts}
        />
      </GroomingProductsTab.Navigator>
    </View>
  );
};
const BathBodyTab = createMaterialTopTabNavigator();
const BathBodyTabScreen = ({ navigation }) => {
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
          component={ShowerGel}
        />
        <BathBodyTab.Screen
          options={{ tabBarLabel: "Soaps" }}
          name="Soaps"
          component={Soaps}
        />
        <BathBodyTab.Screen
          options={{ tabBarLabel: "Handwash" }}
          name="Handwash"
          component={Handwash}
        />
      </BathBodyTab.Navigator>
    </View>
  );
};
const HairCareTab = createMaterialTopTabNavigator();
const HairCareTabScreen = ({ navigation }) => {
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
          component={Shampoo}
        />
        <HairCareTab.Screen
          options={{ tabBarLabel: "Conditioner" }}
          name="Conditioner"
          component={Conditioner}
        />
      </HairCareTab.Navigator>
    </View>
  );
};

const Drawer = createDrawerNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userContact, setUserContact] = useState("Welcome");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) {
    return <WelcomeLoad />;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Welcome"
        drawerContent={({ navigation }) => (
          <DrawerStyle userContact={userContact} navigation={navigation} />
        )}
      >
        <Drawer.Screen name="Welcome" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        {/* <Drawer.Screen
          name="PracticeFlatscreen"
          component={PracticeFlatscreen}
        /> */}
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="HairCare"
          component={HairCareTabScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="BathBody"
          component={BathBodyTabScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="GroomingProducts"
          component={GroomingProductsTabScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="MobileAccessories"
          component={MobilesAccessoriesTabScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="MobileTab"
          component={MobileTabScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="OfferTab"
          component={OffersTabScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="AboutUs"
          component={AboutUs}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="ContactUs"
          component={ContactUs}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="TermsAndCondition"
          component={TermsAndCondition}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="NeedHelp"
          component={NeedHelp}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="Card"
          component={Card}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="ListItemSearch"
          component={ListItemSearchpass}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
