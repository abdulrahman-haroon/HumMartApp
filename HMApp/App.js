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

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeLoad from "./app/Pages/welcomeLoading";
import Login from "./app/Pages/login";
import Home from "./app/Pages/home";
import Header from "./app/styles/header";

import fonts from "./app/styles/fonts";
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
            onPress={() => navigation.goBack("Home")}
          />
        ),
      }}
      name="Login"
      component={Login}
    />
  </LoginStack.Navigator>
);

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
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
      <Drawer.Navigator>
        <Drawer.Screen name="Welcome" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
