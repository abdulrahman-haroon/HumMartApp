import React, { useState } from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Login from "../Screens/login";
import AboutUs from "../Screens/AboutUs";
import Cart from "../Screens/Cart";
import ContactUs from "../Screens/ContactUs";
import Home from "../Screens/home";
import MyAddresses from "../Screens/MyAddresses";
import NeedHelp from "../Screens/NeedHelp";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import TermsAndCondition from "../Screens/TermsAndCondition";

import Card from "../component/Cards/Card";
import FormAddress from "../component/Form/FormAddress";
import HeaderNavigation from "../component/HeaderNavigation";
import ListItemSearch from "../component/Lists/ListItemSearch";

import color from "../styles/color";
import fonts from "../styles/fonts";
import DrawerStyle from "../styles/DrawerStyle";
import { AntDesign } from "@expo/vector-icons";

import { AppleFunction, BundleDealsFunction, CartoonFunction, ConditionerFunction, DiscountedItemsFunction, GroomingProductsFunction, HandwashFunction, HuaweiFunction, ItelFunction, MobileAccessoriesFunction, ShampooFunction, ShowerGelFunction, SoapFunction } from "../Callings/TabsScreenFunctions";



const LoginStack = createStackNavigator();
export const LoginStackScreen = ({ navigation }) => (
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

const OffersTab = createMaterialTopTabNavigator();
export const OffersTabScreen = ({ navigation }) => {
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
const MobileTab = createMaterialTopTabNavigator();
export const MobileTabScreen = ({ navigation }) => {
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
const MobilesAccessoriesTab = createMaterialTopTabNavigator();
export const MobilesAccessoriesTabScreen = ({ navigation }) => {
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
const GroomingProductsTab = createMaterialTopTabNavigator();
export const GroomingProductsTabScreen = ({ navigation }) => {
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
const BathBodyTab = createMaterialTopTabNavigator();
export const BathBodyTabScreen = ({ navigation }) => {
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
const HairCareTab = createMaterialTopTabNavigator();
export const HairCareTabScreen = ({ navigation }) => {
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


const Drawer = createDrawerNavigator();
function Navigations({userContact}) {
  const [counterItems,setCounterItems]=useState(0);
 const ListItemSearchpass = ({ navigation }) => (
    <ListItemSearch navigation={navigation} counterItems={counterItems} setCounterItems={(item)=>setCounterItems(item)} />
  );
    return (
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={({ navigation }) => (
        <DrawerStyle userContact={userContact} navigation={navigation} />
      )}
    >
      <Drawer.Screen
        options={{ title: "Welcome" }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen name="Login" component={LoginStackScreen} />
      {/* <Drawer.Screen
      name="PracticeFlatscreen"
      component={PracticeFlatscreen}
    /> */}
      <Drawer.Screen
        options={{ drawerLabel: () => null, gestureEnabled: false }}
        name="FormAddress"
        component={FormAddress}
      />
      <Drawer.Screen
        options={{ drawerLabel: () => null, gestureEnabled: false }}
        name="MyAddresses"
        component={MyAddresses}
      />
      <Drawer.Screen
        options={{ drawerLabel: () => null, gestureEnabled: false }}
        name="Cart"
        component={Cart}
      />
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

export default Navigations;

