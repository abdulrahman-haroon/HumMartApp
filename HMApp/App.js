import React, { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import Navigations from "./app/Callings/Navigations";
import WelcomeLoad from "./app/Screens/welcomeLoading";

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
    <>
     <Navigations userContact={userContact}/>
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
