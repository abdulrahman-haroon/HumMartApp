import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/personalCare/BathBody/Handwash/1.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/Handwash/BiggerImages/1.jpg"),

    price: "Rs 383",
    prevPrice: "Rs 450",
    description: "BUY 3 Dettol Liquid Handwash Pouche Original & GET 10 % OFF",
    quantity: "3 Pcs",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/personalCare/BathBody/Handwash/2.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/Handwash/BiggerImages/2.jpg"),

    price: "Rs 383",
    prevPrice: "Rs 450",

    description:
      "BUY 3 Dettol Liquid Handwash Pouche SKincare 150 ml GET 10 % OFF",

    quantity: "3 Pcs",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/personalCare/BathBody/Handwash/3.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/Handwash/BiggerImages/3.jpg"),

    price: "Rs 350",
    description: "Siena Foaming Tempting Desire Hand Wash",
    quantity: "400 ml",

    rating: 4.5,
  },
];
function Handwash({ navigation }) {
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
            onPress={() =>
              navigation.navigate("Card", {
                image: item.image2,
                price: item.price,
                prevPrice: item.prevPrice,
                title: item.description,
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

export default Handwash;
