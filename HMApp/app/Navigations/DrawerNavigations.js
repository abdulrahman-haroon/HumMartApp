import React, { useState } from "react";

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
import PTCNavigations from "./PTCNavigations";
import Cart from "../Screens/Cart";
import PTC_ViewDetails from "../Screens/ProceedToCheckout/PTC_ViewDetails";

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
  // const [counterItems, setCounterItems] = useState(0);

  // const ListItemSearchpass = ({ navigation }) => (
  //   <ListItemSearch
  //     navigation={navigation}
  //     counterItems={counterItems}
  //     setCounterItems={(item) => setCounterItems(item)}
  //   />
  // );
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
          name={routes.PTC}
          component={PTCNavigations}
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
