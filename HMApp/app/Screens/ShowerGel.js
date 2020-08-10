import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/1.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/BiggerImages/1.jpg"),
    price: "Rs 529",
    prevPrice: "Rs 545",
    description: "Adidas Adipower Shower Gel",
    quantity: "400 ml",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/2.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/BiggerImages/2.jpg"),

    price: "Rs 941",
    prevPrice: "Rs 949",
    description: "Old Spice Fresh Fraicheur Body Wash",
    quantity: "532 ml",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/3.jpg"),
    image2: require("../assets/SubCategories/personalCare/BathBody/ShowerGel/BiggerImages/3.jpg"),

    price: "Rs 949",

    description: "Old Spice Bearglove Body Wash",
    quantity: "473",

    rating: 4.5,
  },
];
function ShowerGel({ navigation }) {
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

export default ShowerGel;
