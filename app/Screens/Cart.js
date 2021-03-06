import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Color from "../styles/color";
import fonts from "../styles/fonts";

import { Ionicons } from "@expo/vector-icons";

import MyCartComponent from "../component/MyCartComponent";
import routes from "../Navigations/routes";

import { connect } from "react-redux";

import { showMessage } from "react-native-flash-message";
import usersData from "../src/reducers/usersData";
import localIndex from "../src/reducers/localIndex";
import AwesomeAlert from "react-native-awesome-alerts";

function Cart({
  navigation,
  route,
  cartItem,
  removeItem,
  sumSubTotal,
  totalPrice,
  addressSend,
  usersData,
  localIndex,
  loginConfirm,
}) {
  const notProceed = route.params;
  const [showAlert, setShowAlert] = useState(false);

  let sumPrice = 0;
  cartItem.forEach((item) => {
    sumPrice += item.price;
  });

  return (
    <>
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
              {cartItem.length} Items
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}
        >
          {cartItem.length > 0 ? (
            <>
              {notProceed.NotShowTotal === false ||
              notProceed.NotShowTotal === undefined ? (
                <View
                  style={{
                    marginVertical: 10,
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
                        fontWeight: "700",
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
                        Rs {sumPrice}
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
              <ScrollView>
                {cartItem.map((item, key) => (
                  <MyCartComponent
                    key={key}
                    positionIndex={key}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    prevPrice={item.prevPrice}
                    description={item.description}
                    grams={item.quantity}
                    onPress={() => removeItem(item)}
                    add={false}
                  />
                ))}
              </ScrollView>
            </>
          ) : (
            <View
              style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}
            >
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  fontSize: 18,
                  color: Color.darkishLight,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Cart is empty.
              </Text>
            </View>
          )}
        </View>

        {notProceed.NotProceedShow === false ||
        notProceed.NotProceedShow === undefined ||
        usersData[localIndex] !== undefined ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              loginConfirm === true
                ? (sumSubTotal(sumPrice),
                  totalPrice(sumPrice + 100),
                  cartItem.length > 0 &&
                  usersData[localIndex].userAllAddress.length > 0
                    ? navigation.navigate(routes.PTC_ADDRESS_TIME)
                    : showMessage({
                        message:
                          cartItem.length <= 0
                            ? "Please add items to cart to proceed!"
                            : "Please add address to proceed!",
                        type: "warning",
                        color: "white",
                        position: "center",
                        style: {
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        textStyle: {
                          alignSelf: "center",
                        },
                      }))
                : setShowAlert(true)
            }
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
                  {cartItem.length > 0 ? (
                    <Text
                      style={{
                        fontFamily: fonts.ssl,
                        color: "white",
                        fontSize: 15,
                        fontWeight: "700",
                        marginRight: 15,
                      }}
                    >
                      Rs {sumPrice + 100}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontFamily: fonts.ssl,
                        color: "white",
                        fontSize: 15,
                        fontWeight: "700",
                        marginRight: 15,
                      }}
                    >
                      Rs {sumPrice}
                    </Text>
                  )}
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
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Please Login."
        // message="Are you sure ?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Okay"
        confirmButtonColor={Color.orangeDark}
        onConfirmPressed={() => {
          setShowAlert(false);
          navigation.navigate(routes.LOGIN);
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});

const mapStateToProps = (state) => {
  return {
    cartItem: state.cartItem,
    sTotal: state.subTotal,
    Total: state.sumTotal,
    addressSend: state.address,
    usersData: state.usersData,
    localIndex: state.localIndex,
    loginConfirm: state.loginNow,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) =>
      dispatch({
        type: "REMOVE_TO_CART",
        payload: product,
      }),
    sumSubTotal: (subTotal) =>
      dispatch({
        type: "SUB_TOTAL",
        subTotal: subTotal,
      }),
    totalPrice: (totalSum) =>
      dispatch({
        type: "TOTAL",
        total: totalSum,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
