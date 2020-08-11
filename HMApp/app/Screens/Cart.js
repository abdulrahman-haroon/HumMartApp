import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";

import Color from "../styles/color";
import fonts from "../styles/fonts";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import OffersCategory from "../component/OffersCategory";
import MyCartComponent from "../component/MyCartComponent";

const offersOuterCategories = [
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
function Cart({ counter, subTotal, total, navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          backgroundColor: Color.navigationColor,
          alignItems: "center",
        }}
      >
        <Ionicons
          style={{ marginLeft: 20, width: 30 }}
          name="ios-arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            height: 50,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 13,
              fontFamily: fonts.ssl,
            }}
          >
            My Cart {"\n"}
            {counter} Items
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          width: "95%",
          height: 90,
          backgroundColor: "white",
          borderWidth: 0.8,
          borderColor: Color.lightgray,
          elevation: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.ssl,
              color: Color.darkishLight,
              fontSize: 15,
            }}
          >
            Sub total
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                color: Color.darkishLight,
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Rs {subTotal}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.ssl,
              color: Color.darkishLight,
              fontSize: 15,
            }}
          >
            Delivery charges
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                color: Color.lightdarkGray,
                fontSize: 15,
                fontWeight: "100",
              }}
            >
              Rs 100
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
        }}
      >
        <FlatList
          data={offersOuterCategories}
          keyExtractor={(offersOuterCategory) =>
            offersOuterCategory.id.toString()
          }
          renderItem={({ item }) => (
            <MyCartComponent
              key={item.id}
              image={item.image}
              price={item.price}
              prevPrice={item.prevPrice}
              title={item.description}
              grams={item.quantity}
            />
          )}
        />
      </View>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          backgroundColor: Color.orangeDark,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.ssl,
              color: "white",
              fontSize: 15,
            }}
          >
            Proceed To Checkout
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                color: "white",
                fontSize: 15,
                fontWeight: "700",
                marginRight: 15,
              }}
            >
              Rs {total}
            </Text>
            <Ionicons
              name="ios-arrow-forward"
              size={22}
              color="white"
              style={{ marginRight: 15 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
export default Cart;
