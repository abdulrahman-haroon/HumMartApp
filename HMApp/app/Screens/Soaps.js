import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/personalCare/BathBody/Soups/1.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/Soups/BiggerImages/1.jpg"),

    price: "Rs 153",
    prevPrice: "Rs 180",
    description: "BUY 3 Dettol Cool Soap 85 gm GET 10 % OFF",
    quantity: "85 gm X 3 Pcs",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/personalCare/BathBody/Soups/2.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/Soups/BiggerImages/2.jpg"),

    price: "Rs 740",
    prevPrice: "Rs 870",

    description:
      "BUY 5 Dettol Coop Soap 85 gm With Multi Purpose Cleaner Lavender 1 Ltr GET 10% OFF",
    quantity: "85 gm X 5 Pcs + 1 Ltr",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/personalCare/BathBody/Soups/3.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/Soups/BiggerImages/3.jpg"),

    price: "Rs 740",
    prevPrice: "Rs 870",
    description:
      "BUY 5 Dettol Cool Soap 85 gm With Multi Purpose Cleaner Aqua 1 Ltr Get 10% OFF",
    quantity: "85 gm X 5 Pcs + 1 Ltr",

    rating: 4.5,
  },
];
function Soaps({ navigation }) {
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

export default Soaps;
