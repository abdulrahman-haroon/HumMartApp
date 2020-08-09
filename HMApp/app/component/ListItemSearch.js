import React, { useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";

import ListItemsDataDisplay from "./ListItemsDataDisplay";

const dataSearchs = [
  {
    containerId: 1,
    title: "Mobile & Laptops and other items that are avilable in it ",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory1.jpeg"),
  },
  {
    containerId: 2,
    title: "Electornic Accessories",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory2.jpeg"),
  },
  {
    containerId: 3,
    title: "Baby Kids & Toys",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory3.jpeg"),
  },
  {
    containerId: 4,
    title: "Personal Care",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory4.jpeg"),
  },
  {
    containerId: 5,
    title: "Pharmacy",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory5.jpeg"),
  },
  {
    containerId: 6,
    title: "Noodles Sauces & Frozen Food",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory6.jpg"),
  },
  {
    containerId: 7,
    title: "Household Need",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory7.jpg"),
  },
  {
    containerId: 8,
    title: "Breakfast & Dairy",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory8.jpg"),
  },
  {
    containerId: 9,
    title: "Biscuits Snacks & Chocolates",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory9.jpg"),
  },
  {
    containerId: 10,
    title: "Grocery & Staples",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory10.jpg"),
  },
  {
    containerId: 11,
    title: "Beverages",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory11.jpg"),
  },
  {
    containerId: 12,
    title: "Home & Kitchen",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory12.jpg"),
  },
  {
    containerId: 13,
    title: "Furnishing & Home Needs",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory13.jpg"),
  },
  {
    containerId: 14,
    title: "Pet Care",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory14.jpg"),
  },
  {
    containerId: 15,
    title: "Meat & Seafood",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory15.jpg"),
  },
  {
    containerId: 16,
    title: "Offers",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory16.jpg"),
  },
  {
    containerId: 17,
    title: "Other Categories",
    grams: "1kg",
    price: "Rs 249",
    image: require("../assets/Categories/catagory17.jpg"),
  },
];

function ListItemSearch({ totalItems, navigation }) {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Home")}
          style={{
            marginTop: 5,
            marginLeft: 20,
            width: 30,
            height: 30,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
            height: 40,
            borderRadius: 7,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "90%",
              padding: 10,
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: font.sst,
            }}
            placeholder="Search for products"
            onChangeText={(text) => setText(text)}
          />
          <AntDesign
            name="close"
            size={22}
            color="black"
            onPress={() => console.log("text removed")}
          />
        </View>

        <FontAwesome5
          name="shopping-cart"
          size={20}
          color="white"
          onPress={() => console.log("Shopping cart is pressed.")}
          style={{ marginHorizontal: 18 }}
        />
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
        renderItem={({ item }) => (
          <ListItemsDataDisplay
            image={item.image}
            title={item.title}
            grams={item.grams}
            price={item.price}
          />
        )}
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
    height: 60,
    backgroundColor: "#515151",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default ListItemSearch;
