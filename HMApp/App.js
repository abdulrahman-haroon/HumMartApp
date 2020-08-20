import React, { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import Navigations from "./app/Callings/Navigations";
import WelcomeLoad from "./app/Screens/welcomeLoading";

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
      <Navigations />
      <FlashMessage
        position="bottom"
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginBottom: 10,
        }}
      />
    </>
  );
}
