import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import WelcomeLoad from "./Pages/welcomeLoading";
import Login from "./Pages/login";

export default function App() {
  return <WelcomeLoad />;
  // return <Login />;
}
