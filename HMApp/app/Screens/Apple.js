import React from "react";
import { FlatList, View } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/Mobile/Tabs/Apple/1.jpg"),
    image2: require("../assets/SubCategories/Mobile/Tabs/Apple/BiggerImages/1.jpg"),
    price: "Rs 111700",

    description: "Apple Iphone SE2020 | White | With Official Warranty",
    quantity: "128 GB",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/Mobile/Tabs/Apple/2.jpg"),
    image2: require("../assets/SubCategories/Mobile/Tabs/Apple/BiggerImages/2.jpg"),
    price: "Rs 111700",
    description: "Apple Iphone SE2020 | Black | With Official Warranty",
    quantity: "128 GB",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/Mobile/Tabs/Apple/3.jpg"),
    image2: require("../assets/SubCategories/Mobile/Tabs/Apple/BiggerImages/3.jpg"),
    price: "Rs 149000",

    description: "Apple Iphone SE2020 | Red | With Official Warranty",
    quantity: "256 GB",
    rating: 4.5,
  },
  {
    id: 3,
    image: require("../assets/SubCategories/Mobile/Tabs/Apple/4.jpg"),
    image2: require("../assets/SubCategories/Mobile/Tabs/Apple/BiggerImages/4.jpg"),
    price: "Rs 101800",

    description: "Apple Iphone SE2020 | Black | With Official Warranty",
    quantity: "64 GB",
    rating: 4.5,
  },
];
function Apple({ navigation }) {
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

export default Apple;
