import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/electronic/Accessories/1.jpg"),
    image2: require("../assets/SubCategories/electronic/Accessories/BiggerImages/1.jpg"),
    price: "Rs 1999",
    description:
      "Remax Leader Series 2 Usb 10000 mAh White Power Bank (Model RPPP-139)",
    quantity: "1 Piece",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/electronic/Accessories/2.jpg"),
    image2: require("../assets/SubCategories/electronic/Accessories/BiggerImages/4.jpg"),
    price: "Rs 749",
    description: "Remax 2.4A Dual Usb White Type C Charger Set (Model RP-U22",
    quantity: "1 Piece",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/electronic/Accessories/3.jpg"),
    image2: require("../assets/SubCategories/electronic/Accessories/BiggerImages/3.jpg"),
    price: "Rs 549",

    description:
      "Remax Armor Series Black 3.0A Lighting Data Cable (Model RC-162)",
    quantity: "1 Piece",

    rating: 4.5,
  },
  {
    id: 3,
    image: require("../assets/SubCategories/electronic/Accessories/4.jpg"),
    image2: require("../assets/SubCategories/electronic/Accessories/BiggerImages/2.jpg"),

    price: "Rs 699",

    description: "Remax Kerolla Black 2M Type Data Cable (Model RC-094)",
    quantity: "1 Piece",

    rating: 4.5,
  },
];
function MobileAccessories({ navigation }) {
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
            onPress={() =>
              navigation.navigate("Card", {
                image: item.image2,
                price: item.price,
                prevPrice: item.prevPrice,
                title: item.description,
                quantity: item.quantity,
                rating: item.rating,
                sameDayDelievery: false,
              })
            }
          />
        )}
      />
    </View>
  );
}

export default MobileAccessories;
