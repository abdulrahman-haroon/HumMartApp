import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Text,
  TextInput,
  FlatList,
} from "react-native";

import font from "../styles/fonts";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ListItemsDataDisplay from "./ListItemsDataDisplay";

const dataSearchs = [
  {
    containerId: 1,
    title: "Mobile & Laptops",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory1.jpeg"),
  },
  {
    containerId: 2,
    title: "Electornic Accessories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory2.jpeg"),
  },
  {
    containerId: 3,
    title: "Baby Kids & Toys",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory3.jpeg"),
  },
  {
    containerId: 4,
    title: "Personal Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory4.jpeg"),
  },
  {
    containerId: 5,
    title: "Pharmacy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory5.jpeg"),
  },
  {
    containerId: 6,
    title: "Noodles Sauces & Frozen Food",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory6.jpg"),
  },
  {
    containerId: 7,
    title: "Household Need",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory7.jpg"),
  },
  {
    containerId: 8,
    title: "Breakfast & Dairy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory8.jpg"),
  },
  {
    containerId: 9,
    title: "Biscuits Snacks & Chocolates",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory9.jpg"),
  },
  {
    containerId: 10,
    title: "Grocery & Staples",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory10.jpg"),
  },
  {
    containerId: 11,
    title: "Beverages",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory11.jpg"),
  },
  {
    containerId: 12,
    title: "Home & Kitchen",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory12.jpg"),
  },
  {
    containerId: 13,
    title: "Furnishing & Home Needs",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory13.jpg"),
  },
  {
    containerId: 14,
    title: "Pet Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory14.jpg"),
  },
  {
    containerId: 15,
    title: "Meat & Seafood",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory15.jpg"),
  },
  {
    containerId: 16,
    title: "Offers",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory16.jpg"),
  },
  {
    containerId: 17,
    title: "Other Categories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory17.jpg"),
  },
];
function ListItemSearch({ totalItems, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ right: 20, paddingBottom: 10 }}>
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="white"
                onPress={() => navigation.navigate("Home")}
              />
            </View>
            <TextInput
              style={{
                width: "75%",
                height: 50,
                backgroundColor: "white",
                marginBottom: 10,
                borderRadius: 6,
                fontFamily: font.sst,
                fontWeight: "bold",
                padding: 10,
                fontSize: 16,
              }}
              placeholder="Search for products"
            />
            <View style={{ left: 17, paddingBottom: 10 }}>
              <FontAwesome5
                name="shopping-cart"
                size={24}
                color="white"
                onPress={() => console.log("Shopping cart is pressed.")}
              />
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            fontFamily: font.sst,
          }}
        >
          {totalItems} result(s) found
        </Text>
      </View>
      <FlatList
        data={dataSearchs}
        keyExtractor={(dataSearch) => dataSearch.containerId.toString()}
        renderItem={({ item }) => <ListItemsDataDisplay image={item.image} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "8%",
    backgroundColor: "#515151",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default ListItemSearch;
