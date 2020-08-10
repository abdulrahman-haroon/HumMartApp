import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import color from "../styles/color";
import fonts from "../styles/fonts";

const Mobiles = [
  {
    id: 0,
    title: "Mobiles",
    image: require("../assets/SubCategories/Mobile/mobile.jpg"),
  },
];
const Electornics = [
  {
    id: 0,
    title: "Mobiles Accessories",
    image: require("../assets/SubCategories/electronic/1.jpg"),
    screen: "MobileAccessories",
  },
  {
    id: 1,
    title: "Grooming Products",
    image: require("../assets/SubCategories/electronic/2.jpg"),
    screen: "GroomingProducts",
  },
];

const Personal = [
  {
    id: 1,
    title: "Bath & Body",
    image: require("../assets/SubCategories/personalCare/1.jpg"),
    screen: "BathBody",
  },
  {
    id: 2,
    title: "Hair Care",
    image: require("../assets/SubCategories/personalCare/2.jpg"),
    screen: "HairCare",
  },
];
function SubCategoryList({ index, navigation }) {
  return (
    <View style={styles.container}>
      {index === 0 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Mobiles.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
              onPress={() => navigation.navigate("MobileTab")}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 1 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Electornics.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
              onPress={() => navigation.navigate(items.screen)}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 2 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Personal.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
              onPress={() => navigation.navigate(items.screen)}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    marginLeft: 20,
  },
});
export default SubCategoryList;
