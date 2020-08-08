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

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeLoad from "./app/Screens/welcomeLoading";
import Login from "./app/Screens/login";
import Home from "./app/Screens/home";
import Header from "./app/styles/header";

import fonts from "./app/styles/fonts";
import Card from "./app/component/Card";

import ListItemSearch from "./app/component/ListItemSearch";

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
const CardStack = createStackNavigator();
const CardStackScreen = ({ navigation }) => {
  const cardSend = () => (
    <Card
      title="BUY brooke Bond Supreme Tea 910 gm GET Brooke Bond SUpreme Tea Hard Pack 90 gm FREE"
      rating="4.5"
      quantity="910 gm +90 gm"
      price="Rs 885"
      prevPrice="899"
      image={require("./app/assets/Products/Tea/1.jpg")}
    />
  );
  return (
    <CardStack.Navigator>
      <CardStack.Screen
        name="Card"
        component={cardSend}
        options={{
          headerStyle: { backgroundColor: "#515151" },
          headerTitleStyle: { color: "white", fontFamily: fonts.sst },
          headerLeft: () => (
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="white"
              style={{ paddingLeft: 25 }}
              onPress={() => navigation.goBack("Home")}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "baseline",
              }}
            >
              <View style={{ padding: 20 }}>
                <Ionicons name="md-search" size={24} color="white" />
              </View>
              <View>
                <FontAwesome5
                  name="shopping-cart"
                  size={24}
                  color="white"
                  style={{ paddingRight: 15 }}
                  onPress={() => console.log("Shopping cart is pressed.")}
                />
              </View>
            </View>
          ),
          headerTitle:
            "BUY brooke Bond Supreme Tea 910 gm GET Brooke Bond SUpreme Tea Hard Pack 90 gm FREE",
        }}
      />
    </CardStack.Navigator>
  );
};

const ListItemSearchpass = ({ navigation }) => (
  <ListItemSearch navigation={navigation} totalItems="17" />
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
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Welcome" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen
          options={{ drawerLabel: () => null, gestureEnabled: false }}
          name="Card"
          component={CardStackScreen}
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
