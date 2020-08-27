import React, { useEffect } from "react";

import { FlatList, View, ActivityIndicator } from "react-native";
import ListItemsDataDisplay from "./Lists/ListItemsDataDisplay";

import color from "../styles/color";

import client from "../api/client";

function TabsListItems({ navigation, endPoint }) {
  const { data, request } = client(endPoint);
  useEffect(() => {
    request();
  }, []);
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      {data.data !== undefined ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.data}
          keyExtractor={(deal) => deal.id.toString()}
          renderItem={({ item }) => (
            <ListItemsDataDisplay
              data={item}
              image={item.image}
              description={item.description}
              price={item.price}
              prevPrice={item.prevPrice}
              grams={item.quantity}
              onPress={() =>
                navigation.navigate("Card", {
                  image: item.image2,
                  price: item.price,
                  prevPrice: item.prevPrice,
                  description: item.description,
                  quantity: item.quantity,
                  rating: item.rating,
                  sameDayDelievery: false,
                })
              }
            />
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={color.orangeDark} />
        </View>
      )}
    </View>
  );
}
export default TabsListItems;
