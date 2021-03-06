import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AppText from "../Form/AppText";
import color from "../../styles/color";
import font from "../../styles/fonts";

import SubCategoryList from "../SubCategoryList";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

function ListItem({ title, subTitle, image, index, navigation, onPress }) {
  const [isVisible, setIsVisible] = useState(false);
  const [iconName, setIconName] = useState("ios-arrow-down");
  const [selectedKey, setSelectedKey] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={onPress}>
        <TouchableNativeFeedback
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
          {image && <Image style={styles.image} source={{ uri: image }} />}
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
        </TouchableNativeFeedback>
      </TouchableOpacity>

      {isVisible == true ? (
        <TouchableWithoutFeedback
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
          <SubCategoryList
            index={selectedKey}
            navigation={navigation}
            onPress={onPress}
          />
        </TouchableWithoutFeedback>
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
