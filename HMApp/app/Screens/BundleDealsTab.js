import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import ListItemsDataDisplay from "../component/ListItemsDataDisplay";
const deals = [
  {
    id: 0,
    image: require("../assets/OfferCategories/offer1.jpg"),
    image2: require("../assets/OfferCategories/OfferBigImage/1.jpg"),
    price: "Rs 885",
    prevPrice: "899",
    description:
      "BUY Brooke Bond Supreme Tea 910 gm Get Brooke Bond Supreme Tea Hard Pack 90 gm Free",
    quantity: "910 gm + 90 gm",
    rating: 4.5,
  },
  {
    id: 1,
    image: require("../assets/OfferCategories/offer2.jpg"),
    image2: require("../assets/OfferCategories/OfferBigImage/2.jpg"),
    price: "Rs 0",
    description:
      "BUY Brooke Bond Supreme Tea 475 gm GET Sooper Biscuit Family Pack FREE",
    quantity: "475 gm + 1 Piece",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/OfferCategories/offer3.jpg"),
    image2: require("../assets/OfferCategories/OfferBigImage/3.jpg"),
    price: "Rs 530",
    prevPrice: "635",
    description:
      "BUY 3  Lipton Yellow Label Tea 475 gm GET Lipton Green Tea Jasmine Aura 32.5 gm FREE",
    quantity: "475 gm + 32.5 gm",
    rating: 4.5,
  },
  {
    id: 3,
    image: require("../assets/OfferCategories/offer4.jpg"),
    image2: require("../assets/OfferCategories/OfferBigImage/4.jpg"),
    price: "Rs 260",
    prevPrice: "372",
    description:
      "Buy 3 Aquafina Water 1.5 Ltr GET 3 Gatirade Soirts Blue Bolt Drink 500 ml on 30% OFF",
    quantity: "1.5 Ltr X 3 Pcs + 500 ml X 3 Pcs",
    rating: 4.5,
  },
  {
    id: 4,
    image: require("../assets/OfferCategories/offer5.jpg"),
    image2: require("../assets/OfferCategories/OfferBigImage/5.jpg"),
    price: "Rs 900",
    prevPrice: "975",
    description:
      "Buy 12 Gatorade Sport Blue Bolt Drink 500 ml Get Gatorade Squeeze Bottle FREE",
    quantity: "500 ml X 12 Pcs + 1 Piece",
    rating: 4.5,
  },
  {
    id: 5,
    image: require("../assets/OfferCategories/offer6.jpg"),
    image2: require("../assets/OfferCategories/OfferBigImage/6.jpg"),
    price: "Rs 929",
    description:
      "BUY 1 Nestle Nido Fortigrow 910 gm GET 5 Nestle Milo Active Go 15 gm Free",
    quantity: "910 gm",
    rating: 4.5,
  },
];
function BundleDealsTab(props) {
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

export default BundleDealsTab;
