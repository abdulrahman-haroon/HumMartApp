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

function ListItem({ title, subTitle, image, index, navigation, onPress }) {
  const [isVisible, setIsVisible] = useState(false);
  const [iconName, setIconName] = useState("ios-arrow-down");
  const [selectedKey, setSelectedKey] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          {
            isVisible === true
              ? (setIsVisible(false),
                setIconName("ios-arrow-down"),
                setSelectedKey(0))
              : (setIsVisible(true),
                setIconName("ios-arrow-up"),
                setSelectedKey(index));
          }
        }}
      >
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText
            title={title}
            style={{
              fontFamily: font.ssl,
              fontWeight: "bold",
              marginBottom: 7,
            }}
          />
          {subTitle && (
            <AppText
              title={subTitle}
              style={{
                fontFamily: font.ssl,
                fontSize: 11,
                color: color.darkishLight,
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
          <SubCategoryList index={selectedKey} navigation={navigation} />
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
  icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ListItem;
