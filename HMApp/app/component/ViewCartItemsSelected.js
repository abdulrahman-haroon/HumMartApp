import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import color from "../styles/color";
import font from "../styles/fonts";

import Counter from "./Counter";
import HeaderNavigation from "./HeaderNavigation";

import { connect } from "react-redux";

function ViewCartItemsSelected({ onPress, navigation, cartItem }) {
  return (
    <View styles={styles.container}>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          backgroundColor: color.navigationColor,
          alignItems: "center",
        }}
      >
        <Ionicons
          style={{ marginLeft: 20, width: 30 }}
          name="ios-arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 13,
              fontFamily: font.ssl,
            }}
          >
            My Cart {"\n"}
            {cartItem.length} Items
          </Text>
        </View>
      </View>
      <ScrollView>
        {cartItem.map((item, key) => (
          <View key={key} style={styles.innerContainer}>
            {item.image && (
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: item.image }}
              />
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
                    {item.description}
                  </Text>
                </View>
                <Text
                  style={{
                    marginBottom: 10,
                    marginLeft: 10,
                    fontFamily: font.sst,
                  }}
                >
                  {item.quantity}
                </Text>
                <View
                  style={{
                    width: "60%",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ marginLeft: 10, fontSize: 13 }}>
                    {item.price}
                  </Text>
                  {item.prevPrice && (
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 13,
                        color: color.lightdarkGray,
                        textDecorationLine: "line-through",
                      }}
                    >
                      {item.prevPrice}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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

const mapStateToProps = (state) => {
  return {
    cartItem: state.cartItem,
  };
};

export default connect(mapStateToProps)(ViewCartItemsSelected);
