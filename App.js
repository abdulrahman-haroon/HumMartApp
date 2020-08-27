import React, { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import DrawerNavigations from "./app/Navigations/DrawerNavigations";
import WelcomeLoad from "./app/Screens/welcomeLoading";

import { Provider } from "react-redux";
import store from "./app/src/store";

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
    <>
      <Provider store={store}>
        <DrawerNavigations />
        <FlashMessage />
      </Provider>
    </>
  );
}