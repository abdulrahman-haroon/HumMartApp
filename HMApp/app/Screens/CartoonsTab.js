import React from "react";
import { FlatList, View, Text } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const datas = [
  {
    id: 1,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/1.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/1.jpg"),
    title: "Meezan Canola Oil Box",
    grams: "1 Ltr X 5",
    price: "Rs 1325",
    prevPrice: "Rs 1360",
    rating: "4.5",
  },
  {
    id: 2,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/2.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/2.jpg"),

    title: "Tulo Banaspati Poch",
    grams: "1 x 5 kg",
    price: "Rs 1080",
    rating: "4.5",
  },
  {
    id: 3,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/3.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/3.jpg"),

    title: "Dalda Banaspati Poch Box",
    grams: "1 x 5 kg",
    price: "Rs 1210",
    rating: "4.5",
  },
  {
    id: 4,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/4.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/4.jpg"),

    title: "Nestle Pure Life Water Bottle",
    grams: "2 X 5 Ltr ",
    price: "Rs 350",
    rating: "4.5",
  },
  {
    id: 5,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/5.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/5.jpg"),

    title: "Olpers Milk Cartoon",
    grams: "1 Ltr X 12 Pcs",
    price: "Rs 1799",
    rating: "4.5",
  },
  {
    id: 6,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/6.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/6.jpg"),

    title: "Meezan Olivola Oil Poch",
    grams: "1 x 5 Ltr",
    price: "Rs 1315",
    prevPrice: "Rs 1499",
    rating: "4.5",
  },
  {
    id: 7,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/7.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/7.jpg"),

    title: "Mezan Canola Oil Pouch Carton",
    grams: "1 Ltr X 5 Pcs",
    price: "Rs 1070",
    prevPrice: "Rs 1195",
    rating: "4.5",
  },
  {
    id: 8,
    image: require("../assets/OfferCategories/SeeAll/Cartoons/8.jpg"),
    image2: require("../assets/OfferCategories/BigImages/Cartoons/8.jpg"),

    title: "Meezan Banaspati Pouch",
    grams: "1 x 5 kg",
    price: "Rs 1050",
    prevPrice: "Rs 1145",
    rating: "4.5",
  },
];
function CartoonsTab({ navigation }) {
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={datas}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListItemsDataDisplay
            image={item.image}
            title={item.title}
            price={item.price}
            prevPrice={item.prevPrice}
            grams={item.grams}
            sameDayDelievery
            onPress={() =>
              navigation.navigate("Card", {
                image: item.image2,
                price: item.price,
                prevPrice: item.prevPrice,
                title: item.title,
                quantity: item.grams,
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

export default CartoonsTab;
