import React from "react";
import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { CommonActions } from "@react-navigation/native";

import color from "../styles/color";
import fonts from "../styles/fonts";
import ShoppingCart from "./ShoppingCart";
import routes from "../Navigations/routes";
function HeaderNavigation({
  showPromotion,
  navigation,
  title,
  counter,
  showIcons = true,
  drawer,
}) {
  return (
    <View>
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
          onPress={() => (!drawer ? navigation.goBack() : navigation.goBack())}
        />
        {/* TODO:
              navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Home" }],
              })
            ) */}
        <Text
          numberOfLines={1}
          style={{ flex: 7, color: "white", fontFamily: fonts.ssl }}
        >
          {title}
        </Text>
        {showIcons == true ? (
          <>
            <Ionicons
              style={{ flex: 1, marginLeft: 10 }}
              name="md-search"
              size={24}
              color="white"
              onPress={() => navigation.navigate("ListItemSearch")}
            />
            <ShoppingCart navigation={navigation} />
          </>
        ) : null}
      </View>
      {showPromotion && (
        <View
          style={{
            flexDirection: "row",
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EvilIcons name="clock" size={20} color={color.lightBlue} />
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontSize: 13,
              color: color.darkishLight,
            }}
          >
            Tomorrow 10:00 AM |
          </Text>
          <Ionicons
            name="md-car"
            size={20}
            color={color.lightBlue}
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontSize: 13,
              color: color.darkishLight,
            }}
          >
            Min Rs 4000 for free delivery
          </Text>
        </View>
      )}
    </View>
  );
}

export default HeaderNavigation;
