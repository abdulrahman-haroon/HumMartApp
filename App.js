import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import FlashMessage from "react-native-flash-message";
import DrawerNavigations from "./app/Navigations/DrawerNavigations";
import WelcomeLoad from "./app/Screens/welcomeLoading";

import { Provider } from "react-redux";
import store from "./app/src/store";

import { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const netinfo = useNetInfo();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) {
    return <WelcomeLoad />;
  }
  if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Sorry! can't seem to connect. Check your internet</Text>
      </View>
    );
  }
  return (
    <>
      <Provider store={store}>
        <DrawerNavigations />
        <FlashMessage />
      </Provider>
    </>
  );
}
