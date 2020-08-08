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
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import color from "../styles/color";
import ListItem from "../component/ListItem";
import OffersCategory from "../component/OffersCategory";
import fonts from "../styles/fonts";
import ListItemSearch from "../component/ListItemSearch";
import SubCategoryList from "../component/SubCategoryList";

const dropDownContainers = [
  {
    containerId: 1,
    title: "Mobile & Laptops",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory1.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 2,
    title: "Electornic Accessories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory2.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 3,
    title: "Baby Kids & Toys",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory3.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 4,
    title: "Personal Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory4.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 5,
    title: "Pharmacy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory5.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 6,
    title: "Noodles Sauces & Frozen Food",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory6.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 7,
    title: "Household Need",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory7.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 8,
    title: "Breakfast & Dairy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory8.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 9,
    title: "Biscuits Snacks & Chocolates",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory9.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 10,
    title: "Grocery & Staples",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory10.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 11,
    title: "Beverages",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory11.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 12,
    title: "Home & Kitchen",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory12.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 13,
    title: "Furnishing & Home Needs",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory13.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 14,
    title: "Pet Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory14.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 15,
    title: "Meat & Seafood",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory15.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 16,
    title: "Offers",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory16.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 17,
    title: "Other Categories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory17.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
];
function Home({ navigation }) {
  const { height, scale } = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState(true);
  const [heightContainer, setHeightContainer] = useState();
  const [iconName, setIconName] = useState("ios-arrow-down");

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
          placeholder=" Search for products"
          onTouchStart={() => navigation.navigate("ListItemSearch")}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          marginTop: 30,
        }}
      >
        <ScrollView>
          <View
            style={{
              flex: 1,
              width: "100%",
              height: 2300,
              backgroundColor: "white",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <View style={styles.slider}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/homeSlider/1.jpg")}
              />
            </View>
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
                      color: "#fe7027",
                      fontFamily: fonts.sst,
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
                  <OffersCategory
                    image={require("../assets/OfferCategories/offer1.jpg")}
                    price="Rs 885"
                    prevPrice="899"
                    description="Buy Brooke Bond Supreme Tea 910123"
                    quantity="910 gm + 90 gm"
                    onPress={() => navigation.navigate("Card")}
                  />
                  <OffersCategory
                    image={require("../assets/OfferCategories/offer2.jpg")}
                    price="Rs 885"
                    prevPrice="899"
                    description="Buy Brooke Bond Supreme Tea 910123"
                    quantity="910 gm + 90 gm"
                    onPress={() => navigation.navigate("Card")}
                  />
                  <OffersCategory
                    image={require("../assets/OfferCategories/offer3.jpg")}
                    price="Rs 885"
                    prevPrice="899"
                    description="Buy Brooke Bond Supreme Tea 910123"
                    quantity="910 gm + 90 gm"
                    onPress={() => navigation.navigate("Card")}
                  />
                  <OffersCategory
                    image={require("../assets/OfferCategories/offer4.jpg")}
                    price="Rs 885"
                    prevPrice="899"
                    description="Buy Brooke Bond Supreme Tea 910123"
                    quantity="910 gm + 90 gm"
                    onPress={() => navigation.navigate("Card")}
                  />
                  <OffersCategory
                    image={require("../assets/OfferCategories/offer5.jpg")}
                    price="Rs 885"
                    prevPrice="899"
                    description="Buy Brooke Bond Supreme Tea 910123"
                    quantity="910 gm + 90 gm"
                    onPress={() => navigation.navigate("Card")}
                  />
                  <OffersCategory
                    image={require("../assets/OfferCategories/offer6.jpg")}
                    price="Rs 885"
                    prevPrice="899"
                    description="Buy Brooke Bond Supreme Tea 910123"
                    quantity="910 gm + 90 gm"
                    onPress={() => navigation.navigate("Card")}
                  />
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
                  style={{ flexDirection: "row", height: heightContainer }}
                >
                  <ListItem
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}
                    visible={isVisible}
                  />
                  <View
                    style={{
                      borderTopWidth: 0.5,
                      borderBottomWidth: 0.5,
                      borderTopColor: color.lightgray,
                      borderBottomColor: color.lightgray,
                    }}
                  >
                    <Ionicons
                      name={iconName}
                      size={26}
                      color="black"
                      style={{
                        marginTop: 40,
                        marginRight: 17,

                        width: 30,
                      }}
                      onPress={() => {
                        isVisible == true
                          ? (setIsVisible(false),
                            setHeightContainer(-1),
                            setIconName("ios-arrow-down"),
                            console.log(isVisible))
                          : (setIsVisible(true),
                            setHeightContainer(200),
                            setIconName("ios-arrow-up"),
                            console.log(isVisible));
                      }}
                    />
                  </View>
                </View>
              ))}
            </View>
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
    backgroundColor: "white",
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
    width: "100%",
    height: "15%",
    backgroundColor: "white",
    top: 15,
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
