import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Color from "../styles/color";
import fonts from "../styles/fonts";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import OffersCategory from "../component/OffersCategory";
import MyCartComponent from "../component/MyCartComponent";
import { offersOuterCategories } from "../Callings/Data";
import routes from "../Navigations/routes";

function Cart({ counter, subTotal, total, navigation, route }) {
  const notProceed = route.params;
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
      {notProceed.NotShowTotal === false ||
      notProceed.NotShowTotal === undefined ? (
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
      ) : null}
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

      {notProceed.NotProceedShow === false ||
      notProceed.NotProceedShow === undefined ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(routes.PTC)}
        >
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
        </TouchableOpacity>
      ) : null}
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
