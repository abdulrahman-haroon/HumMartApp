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

import font from "../../styles/fonts";
import color from "../../styles/color";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import ListItemsDataDisplay from "./ListItemsDataDisplay";

import { ListItemSearchData } from "../../Callings/Data";
import ShoppingCart from "../ShoppingCart";

function ListItemSearch({
  counter,
  counterItems,
  navigation,
  setCounterItems,
}) {
  const [products, setProducts] = useState(ListItemSearchData);
  const [inMemoryProducts, setInMemoryProducts] = useState(ListItemSearchData);

  const searchProducts = (value) => {
    const filteredProducts = inMemoryProducts.filter((product) => {
      let titleLowerCase = product.description.toLocaleLowerCase();
      let searchLowerCase = value.toLocaleLowerCase();
      return titleLowerCase.indexOf(searchLowerCase) > -1;
    });
    setProducts(filteredProducts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
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
            marginRight: 10,
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
            placeholder="Search For Products"
            onChangeText={(value) => searchProducts(value)}
          />
          <AntDesign
            name="close"
            size={22}
            color="black"
            onPress={() => console.log("text removed")}
          />
        </View>
        <ShoppingCart navigation={navigation} />
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            fontFamily: font.sst,
          }}
        >
          {products.length} result(s) found
        </Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(dataSearch) => dataSearch.id.toString()}
        renderItem={({ item }) => (
          <ListItemsDataDisplay
            data={item}
            image={item.image}
            description={item.description}
            grams={item.quantity}
            price={item.price}
            sameDayDelievery
            onPress={() =>
              navigation.navigate("Card", {
                image: item.image2,
                price: item.price,
                prevPrice: item.prevPrice,
                description: item.description,
                quantity: item.quantity,
                rating: item.rating,
                sameDayDelievery: true,
              })
            }
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
