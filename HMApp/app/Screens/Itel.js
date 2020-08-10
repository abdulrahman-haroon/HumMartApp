import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/Mobile/Tabs/Itel/1.jpg"),
    image2: require("../assets/SubCategories/Mobile/Tabs/Itel/BiggerImages/1.jpg"),

    price: "Rs 14999",
    description: "Itel Vision 1 PLus | Gradation Blue | With Official Warranty",
    quantity: "3 GB| 32 GB",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/Mobile/Tabs/Itel/2.jpg"),
    image2: require("../assets/SubCategories/Mobile/Tabs/Itel/BiggerImages/2.jpg"),

    price: "Rs 11999",
    description:
      "Itel Vision 1 PLus | Gradation Purple | With Official Warranty",
    quantity: "2 GB| 32 GB",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/Mobile/Tabs/Itel/3.jpg"),
    image2: require("../assets/SubCategories/Mobile/Tabs/Itel/BiggerImages/3.jpg"),

    price: "Rs 11999",
    description: "Itel Vision 1 PLus | Gradation Blue | With Official Warranty",
    quantity: "2 GB| 32 GB",
    rating: 4.5,
  },
];
function Itel({ navigation }) {
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

export default Itel;
