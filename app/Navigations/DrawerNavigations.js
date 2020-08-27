import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "../Screens/login";
import AboutUs from "../Screens/AboutUs";
import ContactUs from "../Screens/ContactUs";
import MyAddresses from "../Screens/MyAddresses";
import NeedHelp from "../Screens/NeedHelp";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import TermsAndCondition from "../Screens/TermsAndCondition";

import fonts from "../styles/fonts";

import DrawerStyle from "../styles/DrawerStyle";
import { AntDesign } from "@expo/vector-icons";

import MyOrders from "../Screens/MyOrders";
import HomeNavigations from "./HomeNavigations";
import routes from "./routes";
import Cart from "../Screens/Cart";
import PTC_ViewDetails from "../Screens/ProceedToCheckout/PTC_ViewDetails";
import PTC_AddressTime from "../Screens/ProceedToCheckout/PTC_AddressTime";
import PTC_PlaceOrder from "../Screens/ProceedToCheckout/PTC_PlaceOrder";
import ViewCartItemsSelected from "../component/ViewCartItemsSelected";

const LoginStack = createStackNavigator();
export const LoginStackScreen = ({ navigation, route }) => {
  //FIXME:
  //const LoginRoute = () => <Login route={route} />;
  return (
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
};

const Drawer = createDrawerNavigator();
function DrawerNavigations() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={routes.HOME}
        drawerContent={({ navigation }) => (
          <DrawerStyle navigation={navigation} />
        )}
      >
        <Drawer.Screen name={routes.HOME} component={HomeNavigations} />
        <Drawer.Screen
          name={routes.LOGIN}
          component={LoginStackScreen}
          options={{ gestureEnabled: false }}
        />

        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.MY_ADDRESS}
          component={MyAddresses}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.MY_ORDERS}
          component={MyOrders}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.VIEWDETAILS}
          component={PTC_ViewDetails}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.CART}
          component={Cart}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.PTC_ADDRESS_TIME}
          component={PTC_AddressTime}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.PTC_PLACE_ORDER}
          component={PTC_PlaceOrder}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.VIEW_CART_ITEM_SELECTED}
          component={ViewCartItemsSelected}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.NEED_HELP}
          component={NeedHelp}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.TERMS_AND_CONDITION}
          component={TermsAndCondition}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.PRIVATE_POLICY}
          component={PrivacyPolicy}
        />

        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.CONTACT_US}
          component={ContactUs}
        />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name={routes.ABOUTUS}
          component={AboutUs}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigations;
