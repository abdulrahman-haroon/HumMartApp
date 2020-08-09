import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import Card from "../component/Card";

import color from "../styles/color";
import ListItem from "../component/ListItem";
import OffersCategory from "../component/OffersCategory";
import fonts from "../styles/fonts";

const dropDownContainers = [
  {
    containerId: 1,
    title: "Mobile & Laptops",
    subtitle: "Mobile Phones",
    image: require("../assets/Categories/catagory1.jpeg"),
  },
  {
    containerId: 2,
    title: "Electornic Accessories",
    subtitle:
      "Mobile Accessories, headphones,Smart Watches, Grooming Prodcuts, Kitchen Appliances,Irons and other more",
    image: require("../assets/Categories/catagory2.jpeg"),
  },
  {
    containerId: 3,
    title: "Baby Kids & Toys",
    subtitle:
      "Baby Food, Diapers & Wipes. Baby Skin & Hair Products,Baby Accessories & More",
    image: require("../assets/Categories/catagory3.jpeg"),
  },
  {
    containerId: 4,
    title: "Personal Care",
    subtitle:
      "Bath & Body, Hair Care, skin Care, Oral Care, Face care, Hygiene, Grooming, Deos 7 Perfumes , Cosmetics",
    image: require("../assets/Categories/catagory4.jpeg"),
  },
  {
    containerId: 5,
    title: "Pharmacy",
    subtitle:
      "Contraceptives, Pain Relievers, Antiseptics, OTCs, Health Supplements, Hand & Foot Care, Adut Diapers",
    image: require("../assets/Categories/catagory5.jpeg"),
  },
  {
    containerId: 6,
    title: "Noodles Sauces & Frozen Food",
    subtitle:
      "Noodles, Baking & Dessert Items, Sauces & Ketchups, Pasta & Soups, Ready Made Meals & Mixes, Canned Foods",
    image: require("../assets/Categories/catagory6.jpg"),
  },
  {
    containerId: 7,
    title: "Household Need",
    subtitle:
      "Laundry Detergents, Dish washers, Cleaners, Cleaning Tools, Repellents, Air Fresheners, Tissues & Disposables, Premium Home Care, Shoe Care",
    image: require("../assets/Categories/catagory7.jpg"),
  },
  {
    containerId: 8,
    title: "Breakfast & Dairy",
    subtitle:
      "Milk, BreakFast Cereals, Bread & Eggs, Yogurt, Butter & Cheese, Jam Honey & Spreads",
    image: require("../assets/Categories/catagory8.jpg"),
  },
  {
    containerId: 9,
    title: "Biscuits Snacks & Chocolates",
    subtitle:
      "Biscuits & Cookies, Namkeen & Snacks, Chips & Crips, Chocolates & Candies, Sweets",
    image: require("../assets/Categories/catagory9.jpg"),
  },
  {
    containerId: 10,
    title: "Grocery & Staples",
    subtitle:
      "Pulses, Atta, Rice, Dry Fruits & Nuts, Oils Ghee & Banaspati, Spices, Salt Sugar, Vinegar & Dressings",
    image: require("../assets/Categories/catagory10.jpg"),
  },
  {
    containerId: 11,
    title: "Beverages",
    subtitle:
      "Soft Drinks, Juices & Concentrates, Tea & Coffee, Energy Drinks, Water",
    image: require("../assets/Categories/catagory11.jpg"),
  },
  {
    containerId: 12,
    title: "Home & Kitchen",
    subtitle:
      "Bathroom Essentials, Cookware, Kitchen Tools & Accessories, Dining & Servings, Cleaning Equipments",
    image: require("../assets/Categories/catagory12.jpg"),
  },
  {
    containerId: 13,
    title: "Furnishing & Home Needs",
    subtitle:
      "Bedding, Curtains & Home Decor, Bathing Needs, Mats & Carpets, Furniture & Storage, Travelling Bags",
    image: require("../assets/Categories/catagory13.jpg"),
  },
  {
    containerId: 14,
    title: "Pet Care",
    subtitle: "Dog Supplies, Cat Supplies, Fish Supplies",
    image: require("../assets/Categories/catagory14.jpg"),
  },
  {
    containerId: 15,
    title: "Meat & Seafood",
    subtitle: "Meat, Poultry, SeaFood",
    image: require("../assets/Categories/catagory15.jpg"),
  },
  {
    containerId: 16,
    title: "Offers",
    subtitle: "Bundle Deals, Discounted Deals, Near Expiry Products",
    image: require("../assets/Categories/catagory16.jpg"),
  },
  {
    containerId: 17,
    title: "Other Categories",
    subtitle: "Smoker Corner",
    image: require("../assets/Categories/catagory17.jpg"),
  },
];
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

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#515151",
          marginBottom: 10,
          position: "absolute",
          alignItems: "center",
          padding: 5,
        }}
      >
        <TextInput
          style={{
            width: "97%",
            height: "100%",
            backgroundColor: "white",
            fontFamily: fonts.sst,
            fontSize: 16,
            borderRadius: 5,
            padding: 5,
            fontWeight: "bold",
          }}
          placeholder=" Search for Offers"
          onTouchStart={() => navigation.navigate("ListItemSearch")}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          marginTop: 25,
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#c6c6c6",
          }}
        >
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: 200,
              marginBottom: 7,
            }}
            resizeMode="contain"
            source={require("../assets/homeSlider/1.jpg")}
          />
          <View style={styles.offer}>
            <Text style={styles.offerText}>Offers</Text>
            <TouchableNativeFeedback>
              <View
                style={{
                  width: 60,
                  height: 30,
                  position: "absolute",
                  top: 5,
                  right: 12,
                  borderWidth: 0.5,
                  borderColor: "#fe7027",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: color.orangeDark,
                    fontFamily: fonts.ssl,

                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  See All
                </Text>
              </View>
            </TouchableNativeFeedback>

            <View style={styles.offerContainers}>
              <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {offersOuterCategories.map((item, key) => (
                  <OffersCategory
                    key={item.id}
                    image={item.image}
                    price={item.price}
                    prevPrice={item.prevPrice}
                    description={item.description}
                    quantity={item.quantity}
                    onPress={() => {
                      key === item.id
                        ? navigation.navigate(
                            "Card",
                            navigation.navigate("Card", {
                              image: item.image2,
                              price: item.price,
                              prevPrice: item.prevPrice,
                              title: item.description,
                              quantity: item.quantity,
                              rating: item.rating,
                            })
                          )
                        : null;
                    }}
                  />
                ))}

                <TouchableOpacity style={{ height: 265, width: 150 }}>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 20,
                      marginRight: 10,
                      borderWidth: 0.5,
                      borderColor: color.lightgray,
                      elevation: 0.5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: color.orangeDark,
                        fontFamily: fonts.ns,
                        fontSize: 15,
                      }}
                    >
                      See all >
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "20%",
              backgroundColor: "white",
              marginVertical: 10,
            }}
          >
            {dropDownContainers.map((item, key) => (
              <View
                key={key}
                style={{
                  flexDirection: "row",
                  borderTopWidth: 1,
                  borderTopColor: color.lightgray,
                }}
              >
                <ListItem
                  title={item.title}
                  subTitle={item.subtitle}
                  image={item.image}
                  index={key}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#c6c6c6",
  },
  scrollView: {
    backgroundColor: "green",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  slider: {
    width: "100%",
    height: "8%",
    backgroundColor: color.white,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  offer: {
    flex: 1,
    width: "100%",
    height: 320,
    backgroundColor: "white",
    marginBottom: -1,
    borderTopWidth: 2,
    borderTopColor: color.lightgray,
  },
  offerText: {
    position: "absolute",
    top: 5,
    left: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  seeAllButton: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  offerContainers: {
    flex: 1,
    marginTop: 45,
  },
});
export default Home;
