import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/1.jpg"),
    price: "Rs 529",
    prevPrice: "Rs 545",
    description: "Adidas Adipower Shower Gel",
    quantity: "400 ml",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/2.jpg"),
    price: "Rs 941",
    prevPrice: "Rs 949",
    description: "Old Spice Fresh Fraicheur Body Wash",
    quantity: "532 ml",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/3.jpg"),
    price: "Rs 949",

    description: "Old Spice Bearglove Body Wash",
    quantity: "473",

    rating: 4.5,
  },
];
function ShowerGel(props) {
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

export default ShowerGel;
