import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  FlatList,
  ScrollView,
  Image,
} from "react-native";

import color from "../styles/color";
import ListItem from "../component/ListItem";
import OffersCategory from "../component/OffersCategory";

const dropDownContainers = [
  {
    containerId: 1,
    title: "Mobile & Laptops",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory1.jpeg"),
  },
  {
    containerId: 2,
    title: "Electornic Accessories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory2.jpeg"),
  },
  {
    containerId: 3,
    title: "Baby Kids & Toys",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory3.jpeg"),
  },
  {
    containerId: 4,
    title: "Personal Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory4.jpeg"),
  },
  {
    containerId: 5,
    title: "Pharmacy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory5.jpeg"),
  },
  {
    containerId: 6,
    title: "Noodles Sauces & Frozen Food",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory6.jpg"),
  },
  {
    containerId: 7,
    title: "Household Need",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory7.jpg"),
  },
  {
    containerId: 8,
    title: "Breakfast & Dairy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory8.jpg"),
  },
  {
    containerId: 9,
    title: "Biscuits Snacks & Chocolates",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory9.jpg"),
  },
  {
    containerId: 10,
    title: "Grocery & Staples",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory10.jpg"),
  },
  {
    containerId: 11,
    title: "Beverages",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory11.jpg"),
  },
  {
    containerId: 12,
    title: "Home & Kitchen",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory12.jpg"),
  },
  {
    containerId: 13,
    title: "Furnishing & Home Needs",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory13.jpg"),
  },
  {
    containerId: 14,
    title: "Pet Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory14.jpg"),
  },
  {
    containerId: 15,
    title: "Meat & Seafood",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory15.jpg"),
  },
  {
    containerId: 16,
    title: "Offers",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory16.jpg"),
  },
  {
    containerId: 17,
    title: "Other Categories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory17.jpg"),
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/homeSlider/1.jpg")}
        />
      </View>
      <View style={styles.offer}>
        <Text style={styles.offerText}>Offers</Text>
        <View style={styles.seeAllButton}>
          <Button color="black" title="See All" />
        </View>

        <View style={styles.offerContainers}>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <OffersCategory
              image={require("../assets/OfferCategories/offer1.jpg")}
              price="Rs 885"
              prevPrice="899"
              description="Buy Brooke Bond Supreme Tea 910123"
              quantity="910 gm + 90 gm"
            />
            <OffersCategory
              image={require("../assets/OfferCategories/offer2.jpg")}
              price="Rs 885"
              prevPrice="899"
              description="Buy Brooke Bond Supreme Tea 910123"
              quantity="910 gm + 90 gm"
            />
            <OffersCategory
              image={require("../assets/OfferCategories/offer3.jpg")}
              price="Rs 885"
              prevPrice="899"
              description="Buy Brooke Bond Supreme Tea 910123"
              quantity="910 gm + 90 gm"
            />
            <OffersCategory
              image={require("../assets/OfferCategories/offer4.jpg")}
              price="Rs 885"
              prevPrice="899"
              description="Buy Brooke Bond Supreme Tea 910123"
              quantity="910 gm + 90 gm"
            />
            <OffersCategory
              image={require("../assets/OfferCategories/offer5.jpg")}
              price="Rs 885"
              prevPrice="899"
              description="Buy Brooke Bond Supreme Tea 910123"
              quantity="910 gm + 90 gm"
            />
            <OffersCategory
              image={require("../assets/OfferCategories/offer6.jpg")}
              price="Rs 885"
              prevPrice="899"
              description="Buy Brooke Bond Supreme Tea 910123"
              quantity="910 gm + 90 gm"
            />
          </ScrollView>

          {/* <View style={styles.offerContainer1}>
            <Text>Slider Container 1</Text>
          </View>
          <View style={styles.offerContainer1}>
            <Text>Slider Container 2</Text>
          </View>
          <View style={styles.offerContainer1}>
            <Text>Slider Container 3</Text>
          </View> */}
        </View>
      </View>
      <View style={styles.dropDownContainer}>
        <FlatList
          data={dropDownContainers}
          keyExtractor={(dropDownContainer) =>
            dropDownContainer.containerId.toString()
          }
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.subtitle}
              image={item.image}
            />
          )}
        />

        {/* <View style={styles.dropDownContainer1}>
          <Text>Drop Down 2</Text>
        </View>
        <View style={styles.dropDownContainer1}>
          <Text>Drop Down 3</Text>
        </View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  slider: {
    width: "100%",
    height: "25%",
    backgroundColor: color.gray,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  offer: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    top: -10,
  },
  offerText: {
    position: "absolute",
    top: 5,
    left: 10,
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
  offerContainer1: {
    width: "30%",
    height: "85%",
    backgroundColor: "white",
    bottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownContainer: {
    flex: 1,
    width: "100%",
    height: "20%",
    backgroundColor: "#787878",
    justifyContent: "space-evenly",
  },
  dropDownContainer1: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
