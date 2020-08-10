import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/Mobile/Tabs/Huawei/1.jpg"),
    price: "Rs 24999",
    description: "Huawei Y7 Prime 2019 | Aurora Blue | With Official Warranty",
    quantity: "3 GB | 64 GB",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/Mobile/Tabs/Huawei/2.jpg"),

    price: "Rs 12999",
    description: "Huawei Y7 Lite | Blue | With Official Warranty",
    quantity: "1 GB | 16 GB",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/Mobile/Tabs/Huawei/3.jpg"),

    price: "Rs 31999",
    description: "Huawei Y9 2019 | Blue Swarovski | With Official Warranty",
    quantity: "4 GB | 64 GB",
    rating: 4.5,
  },
  {
    id: 3,
    image: require("../assets/SubCategories/Mobile/Tabs/Huawei/4.jpg"),

    price: "Rs 19299",
    description: "Huawei Y6S | Orchid Blue | With Official Warranty",
    quantity: "3 GB | 64 GB",
    rating: 4.5,
  },
];
function Huawei(props) {
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

export default Huawei;
