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

import {ListItemSearchData} from "../../Callings/Data";


function ListItemSearch({ counter,counterItems, navigation ,setCounterItems}) {
  const [text, setText] = useState();
  setCounterItems(ListItemSearchData.length);
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
        <View style={{ flexDirection: "row",marginLeft:5 }}>
            <FontAwesome5
              name="shopping-cart"
              size={24}
              color="white"
              style={{ paddingRight: 5}}
              onPress={() => navigation.navigate("Cart")}
            />
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 18 / 2,
                backgroundColor: color.orangeDark,
                right: 10,
                bottom: 6,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontFamily: font.ssl }}>
                {counter}
              </Text>
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
          {counterItems} result(s) found
        </Text>
      </View>
      <FlatList
        data={ListItemSearchData}
        keyExtractor={(dataSearch) => dataSearch.id.toString()}
        renderItem={({ item }) => (
          <ListItemsDataDisplay
            image={item.image}
            title={item.description}
            grams={item.quantity}
            price={item.price}
          
            sameDayDelievery
            onPress={()=>navigation.navigate("Card",{
              image: item.image2,
              price: item.price,
              prevPrice: item.prevPrice,
              title: item.description,
              quantity: item.quantity,
              rating: item.rating,
              sameDayDelievery: true,
            })}
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