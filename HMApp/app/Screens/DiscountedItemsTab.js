import React from "react";
import { FlatList, View, Text } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const items = [
  {
    id: 1,
    image: require("../assets/OfferCategories/SeeAll/DiscountedItems/1.jpg"),
    title: "Cool & Cool Toilet Rolls Printed Embossed",
    grams: "1 Roll",
    price: "Rs 990",
  },
  {
    id: 2,
    image: require("../assets/OfferCategories/SeeAll/DiscountedItems/2.jpg"),
    title: "Alshifa Flavour Sidr",
    grams: "500 gm",
    price: "Rs 6055",
  },
];
function DiscountedItemsTab(props) {
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItemsDataDisplay
            image={item.image}
            title={item.title}
            price={item.price}
            prevPrice={item.prevPrice}
            grams={item.grams}
          />
        )}
      />
    </View>
  );
}

export default DiscountedItemsTab;
