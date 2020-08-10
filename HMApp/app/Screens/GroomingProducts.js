import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/electronic/Grooming/1.jpg"),
    price: "Rs 10323",
    description:
      "Philips (Model PR3110/00) Infrared Lamp For Muscles and Joint Pain Relief White 150 Watts",
    quantity: "1 Box",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/electronic/Grooming/2.jpg"),
    price: "Rs 10369",
    description:
      "Philips (Model S5051/03) Shaver Black Quatec Wet & Dry With Comfort Cut Blade System",
    quantity: "1 Box",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/electronic/Grooming/3.jpg"),
    price: "Rs 12014",

    description:
      "Philips (Model HX6231/01) Dental Toothbrush White Advanced Sonicare Dynamic Cleaning 1 Mode 1 Brush Head",
    quantity: "1 Box",

    rating: 4.5,
  },
  {
    id: 3,
    image: require("../assets/SubCategories/electronic/Grooming/4.jpg"),

    price: "Rs 11899",

    description:
      "Philips (Model HP8656/00) Hair Styler Black 1000 Watts Even Heat Distribution With 5 Styling Attachments & Iconic Care.",
    quantity: "1 Box",

    rating: 4.5,
  },
];
function GroomingProducts(props) {
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
          />
        )}
      />
    </View>
  );
}

export default GroomingProducts;
