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
import Counter from "./Counter";

function MyCartComponent({
  title,
  grams,
  price,
  image,
  prevPrice,
  sameDayDelievery,
  onPress,
  add=true,
  cross=true
}) {
  return (
    <View styles={styles.container}>
      <View
        activeOpacity={0.7}
        style={styles.innerContainer}
        //onPress={onPress}
      >
        {image && (
          <Image resizeMode="contain" style={styles.image} source={image} />
        )}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, width: "98%" }}>
            <View onPress={onPress}>
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
            </View>
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 10,
                fontFamily: font.sst,
              }}
            >
              {grams}
            </Text>
            <View
              style={{
                width: "60%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ marginLeft: 10, fontSize: 13 }}>{price}</Text>
              {prevPrice && (
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 13,
                    color: color.lightdarkGray,
                    textDecorationLine: "line-through",
                  }}
                >
                  {prevPrice}
                </Text>
              )}
            </View>

           {add ===true&& <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                bottom: 25,
              }}
            >
              <View
                style={{
                  width: "34%",
                  height: 30,
                  top: 10,
                  left: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Counter />
              </View>
            </View>}
            {sameDayDelievery && (
              <View
                style={{ flexDirection: "row", marginLeft: 10, bottom: 20 }}
              >
                <FontAwesome5
                  style={{ marginRight: 7 }}
                  name="motorcycle"
                  size={24}
                  color="green"
                />
                <Text>Same Day Delievery</Text>
              </View>
            )}
          </View>
        </View>
        {cross===true &&<View onPress={onPress} style={{ height: 50 }}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 14,
              marginVertical: 10,
            }}
          >
            <Ionicons name="ios-close" size={24} color={color.lightdarkGray} />
          </View>
        </View>}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: color.lightgray,
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
  },
});
export default MyCartComponent;
