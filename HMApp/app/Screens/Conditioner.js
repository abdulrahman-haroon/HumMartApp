import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/personalCare/HairCare/Conditioner/1.jpg"),
    price: "Rs 280",

    description: "Head & Shoulders Classic Clean 2 In 1 Shampoo + Conditioner",
    quantity: "190 ml",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/personalCare/HairCare/Conditioner/2.jpg"),
    price: "Rs 270",

    description: "Tresemme Protein Thickness With Collagen COnditioner",

    quantity: "160 ml",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/personalCare/HairCare/Conditioner/3.jpg"),
    price: "Rs 270",
    description: "Tresemme Color Revitalise With Camelia Oil Conditioner",
    quantity: "160 ml",

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
