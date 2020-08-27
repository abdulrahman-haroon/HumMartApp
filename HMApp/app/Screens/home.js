import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";

import client from "../api/client";
import routes from "../Navigations/routes";
import ShoppingCart from "../component/ShoppingCart";

import { Entypo } from "@expo/vector-icons";

import color from "../styles/color";
import fonts from "../styles/fonts";

import ListItem from "../component/Lists/ListItem";
import OffersCategory from "../component/OffersCategory";

import { imagesData } from "../Callings/Data";

import { SliderBox } from "react-native-image-slider-box";

function Home({ navigation }) {
  const [scrollViewRef, setScrollViewReff] = useState(React.createRef());

  const { data: offersOuterCategories, request: request1 } = client(
    "/offersOuterCategories"
  );
  const { data: dropDownContainers, request: request2 } = client(
    "/dropDownContainers"
  );
  const { data: ListItemSearchData, request: request3 } = client(
    "/completeData"
  );

  useEffect(() => {
    request1();
    request2();
    request3();
  }, []);

  const scrollToBottom = () => {
    return scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          paddingBottom: 10,
          backgroundColor: color.navigationColor,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Entypo
            name="menu"
            size={24}
            color="white"
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.openDrawer()}
          />
          <View
            style={{
              flex: 1,
              left: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 130, height: 50 }}
              source={require("../assets/WelcomeLoading.png")}
            />
          </View>
          <ShoppingCart navigation={navigation} />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              width: "95%",
              backgroundColor: "white",
              fontFamily: fonts.sst,
              fontSize: 16,
              borderRadius: 5,
              padding: 5,
              fontWeight: "bold",
            }}
            caretHidden={true}
            placeholder=" Search for Products"
            onTouchStart={() =>
              navigation.navigate(routes.LIST_ITEM_SEARCH, {
                item: ListItemSearchData.data,
              })
            }
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          marginTop: 3,
        }}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{
            flex: 1,
            backgroundColor: "#c6c6c6",
          }}
        >
          <SliderBox
            images={imagesData}
            onCurrentImagePressed={(index) => {
              index === 0
                ? navigation.navigate("OfferTab")
                : index === 1
                ? navigation.navigate("MobileTab")
                : index === 2
                ? navigation.navigate("BathBody")
                : null;
            }}
            dotColor={color.orangeDark}
            inactiveDotColor="#90A4AE"
            autoplay={true}
            circleLoop={true}
          />
          <View style={styles.offer}>
            <Text style={styles.offerText}>Offers</Text>

            <TouchableNativeFeedback
              onPress={() => navigation.navigate("OfferTab")}
            >
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
                {offersOuterCategories.data !== undefined ? (
                  offersOuterCategories.data.map((item, key) => (
                    <OffersCategory
                      data={item}
                      key={item.id}
                      image={item.image}
                      price={item.price}
                      prevPrice={item.prevPrice}
                      description={item.description}
                      quantity={item.quantity}
                      onPress={() => {
                        navigation.navigate("Card", {
                          // id: item.id,
                          image: item.image2,
                          price: item.price,
                          prevPrice: item.prevPrice,
                          description: item.description,
                          quantity: item.quantity,
                          rating: item.rating,
                          sameDayDelievery: true,
                        });
                      }}
                    />
                  ))
                ) : (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <ActivityIndicator
                      style={styles.ActivityIndicatorStyle}
                      size="large"
                      color={color.orangeDark}
                    />
                  </View>
                )}

                <TouchableOpacity
                  style={{ height: 265, width: 150 }}
                  onPress={() => navigation.navigate("OfferTab")}
                >
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
                      See all
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
            {dropDownContainers.data !== undefined ? (
              dropDownContainers.data.map((item, key) => (
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
                    navigation={navigation}
                    onPress={() => scrollToBottom()}
                  />
                </View>
              ))
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator
                  style={styles.ActivityIndicatorStyle}
                  size="large"
                  color={color.orangeDark}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    marginTop: 7,
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
