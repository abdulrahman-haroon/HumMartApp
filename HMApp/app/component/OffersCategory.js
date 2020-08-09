import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import fonts from "../styles/fonts";
import color from "../styles/color";

function OffersCategory({
  image,
  price,
  prevPrice,
  description,
  quantity,
  onPress,
}) {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            height: 265,
            width: 130,
            marginLeft: 20,
            borderWidth: 0.5,
            borderColor: color.lightgray,
            elevation: 0.5,
          }}
        >
          <View
            style={{
              height: 265,
              wdith: 130,
            }}
          >
            <View style={{ flex: 3 }}>
              <Image
                style={{
                  marginTop: 10,
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                  overflow: "hidden",
                }}
                source={image}
              />
            </View>
            <View style={{ flex: 2 }}>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <Text>{price} </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                  }}
                >
                  {prevPrice}
                </Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  numberOfLines={2}
                  style={{
                    paddingVertical: 5,
                    marginHorizontal: 5,
                    fontFamily: fonts.ssl,
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  {description}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "gray" }}>{quantity}</Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {visible === true ? (
                <TouchableOpacity
                  style={{
                    width: "80%",
                    height: 30,
                    backgroundColor: color.orangeDark,
                    borderRadius: 5,
                    marginVertical: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => setVisible(false)}
                >
                  <Text style={{ color: "white" }}>ADD</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default OffersCategory;
