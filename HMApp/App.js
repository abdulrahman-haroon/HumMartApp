import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeLoad from "./Pages/welcomeLoading";
import Login from "./Pages/login";
import Home from "./Pages/home";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#515151" },
        headerTitleStyle: { color: "white", fontFamily: "sans-serif-thin" },
      }}
      name="HumMart"
      component={Home}
    />
  </HomeStack.Navigator>
);

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      options={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#515151" },
        headerTitleStyle: { color: "white", fontFamily: "sans-serif-thin" },
      }}
      name="Login"
      component={Login}
    />
  </LoginStack.Navigator>
);
const Drawer = createDrawerNavigator();
function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Welcome" component={HomeStackScreen} />
      <Drawer.Screen name="Login" component={LoginStackScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={WelcomeLoad}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#515151" },
            headerTitleStyle: { color: "white", fontFamily: "sans-serif-thin" },
            headerShown: false,
          }}
          name="Drawer"
          component={DrawerRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
