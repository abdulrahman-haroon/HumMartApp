import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import AppText from "../component/AppText";
import color from "../styles/color";
import font from "../styles/fonts";

import SubCategoryList from "./SubCategoryList";

function ListItem({ title, subTitle, image, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [iconName, setIconName] = useState("ios-arrow-down");
  const [keys, setKeys] = useState(index);
  const [selectedKey, setSelectedKey] = useState(0);
  // console.log("Index:" + selectedKey);
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          {
            keys === 0
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(0))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(0))
              : keys === 1
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(1))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(1))
              : keys === 2
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(2))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(2))
              : keys === 3
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(3))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(3))
              : keys === 4
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(4))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(4))
              : keys === 5
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(5))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(5))
              : keys === 6
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(6))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(6))
              : keys === 7
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(7))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(7))
              : keys === 8
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(8))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(8))
              : keys === 9
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(9))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(9))
              : keys === 10
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(10))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(10))
              : keys === 11
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(11))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(11))
              : keys === 12
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(12))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(12))
              : keys === 13
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(13))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(13))
              : keys === 14
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(14))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(14))
              : keys === 15
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(15))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(15))
              : keys === 16
              ? isVisible == true
                ? (setIsVisible(false),
                  setIconName("ios-arrow-down"),
                  setSelectedKey(16))
                : (setIsVisible(true),
                  setIconName("ios-arrow-up"),
                  setSelectedKey(16))
              : null;
          }
        }}
      >
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText
            style={styles.title}
            title={title}
            style={{
              fontFamily: font.ssl,

              fontWeight: "bold",
              marginBottom: 7,
            }}
          />
          {subTitle && (
            <AppText
              style={styles.subTitle}
              title={subTitle}
              style={{
                fontFamily: font.ssl,
                fontSize: 11,
                color: color.lightdarkGray,
              }}
            />
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",

            left: 10,
          }}
        >
          <Ionicons
            name={iconName}
            size={18}
            color="green"
            style={{
              width: 50,
            }}
          />
        </View>
      </TouchableOpacity>

      {isVisible == true ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderTopColor: color.lightgray,
            marginLeft: 5,
            marginRight: 30,
          }}
        >
          <SubCategoryList index={selectedKey} />
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",

    // borderTopWidth: 2,
    // borderTopColor: color.lightgray,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitle: {
    color: color.lightdarkGray,
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ListItem;
