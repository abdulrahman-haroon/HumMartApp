import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";

function WelcomeLoad() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          resizeMode="contain"
          style={styles.welcomeLoadingImageSize}
          source={require("../assets/WelcomeLoading.png")}
        />
      </View>

      <ActivityIndicator
        style={styles.ActivityIndicatorStyle}
        size="large"
        color="green"
      />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  welcomeLoadingImageSize: {
    width: 380,
    height: 380,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  containerImg: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default WelcomeLoad;
