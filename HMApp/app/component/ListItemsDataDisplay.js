import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import color from "../styles/color";
import font from "../styles/fonts";

function ListItemsDataDisplay({ title, grams, price, image }) {
  return (
    <View styles={styles.container}>
      <View style={styles.innerContainer}>
        {image && (
          <Image resizeMode="contain" style={styles.image} source={image} />
        )}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, width: "98%" }}>
            <Text
              numberOfLines={2}
              style={{
                marginTop: 10,
                marginBottom: 8,
                marginLeft: 10,
                fontFamily: font.sst,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {title}
            </Text>
            <Text
              style={{ marginBottom: 10, marginLeft: 10, fontFamily: font.sst }}
            >
              {grams}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ marginBottom: 10, marginLeft: 10, fontSize: 13 }}>
                {price}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "34%",
                    height: 30,
                    backgroundColor: "#fe7027",
                    borderRadius: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", marginTop: 5, marginLeft: 10 }}
            >
              <FontAwesome5
                style={{ marginRight: 7 }}
                name="motorcycle"
                size={24}
                color="green"
              />
              <Text>Same Day Delievery</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 14,
            marginVertical: 10,
          }}
        >
          <Ionicons name="ios-arrow-forward" size={24} color="#fe7027" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  innerContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: color.lightgray,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
export default ListItemsDataDisplay;
