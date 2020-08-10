import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/personalCare/HairCare/Shampoo/1.jpg"),
    price: "Rs 230",

    description: "Head & Shoulders Lemon Fresh Shampoo",
    quantity: "185 ml",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/personalCare/HairCare/Shampoo/2.jpg"),
    price: "Rs 229",

    description: "Sunsilk Hair Fall Solution Shampoo",

    quantity: "200 ml",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/personalCare/HairCare/Shampoo/3.jpg"),
    price: "Rs 175",
    description: "LifeBoy Herbal Strong Shampoo",
    quantity: "175 ml",

    rating: 4.5,
  },
];
function Handwash(props) {
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={deals}
        keyExtractor={(deal) => deal.id.toString()}
        renderItem={({ item }) => (
          <ListItemsDataDisplay
            image={item.image}
            title={item.description}
            price={item.price}
            prevPrice={item.prevPrice}
            grams={item.quantity}
            sameDayDelievery
          />
        )}
      />
    </View>
  );
}

export default Handwash;
