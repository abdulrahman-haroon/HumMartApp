import React from "react";
import { View, Text, ScrollView } from "react-native";

import color from "../styles/color";
import fonts from "../styles/fonts";

import OrdersComponent from "../component/OrdersComponent";

import { connect } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import routes from "../Navigations/routes";

function MyOrders({
  navigation,
  route,
  ordersDetails,
  emptyCart,
  onSuccessPTC,
  onConfirmation,
  emptyDateTime,
  noConfirmation,
  usersData,
  globalIndexAuth,
  localIndex,
  emptyOrderDetails,
}) {
  // console.log(usersData[globalIndexAuth].orderDetailsData);
  // console.log(usersData[0].orderDetailsData[0]);
  // console.log(usersData);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          backgroundColor: color.navigationColor,
          alignItems: "center",
        }}
      >
        <Ionicons
          style={{ marginLeft: 20, width: 30 }}
          name="ios-arrow-back"
          size={24}
          color="white"
          onPress={() =>
            onSuccessPTC === true
              ? (emptyCart(),
                emptyDateTime(),
                emptyOrderDetails(),
                noConfirmation(),
                onConfirmation(false),
                navigation.jumpTo(routes.HOME))
              : navigation.jumpTo(routes.HOME)
          }
        />

        <Text
          numberOfLines={1}
          style={{ flex: 7, color: "white", fontFamily: fonts.ssl }}
        >
          My Orders
        </Text>
      </View>
      {usersData[localIndex] === undefined ? (
        <View
          style={{
            flex: 1,
            backgroundColor: color.lightdarkGray,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 18, fontFamily: fonts.ssl, fontWeight: "600" }}
          >
            No Orders
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView>
            {localIndex !== null
              ? usersData[localIndex].orderDetailsData.map((item, key) => (
                  <OrdersComponent
                    key={key}
                    data={item}
                    navigation={navigation}
                    date={item.date}
                    time={item.time}
                    schedule={item.schedule}
                    subtotal={item.subTotal}
                    total={item.total}
                    orderNumber={item.orderNumber}
                  />
                ))
              : null}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    ordersDetails: state.ordersDetails,
    cartItem: state.cartItem,
    onSuccessPTC: state.onSuccessPTC,
    dateTime: state.dateTime,
    confirmationPTC: state.confirmationPTC,
    usersData: state.usersData,
    globalIndexAuth: state.globalIndexAuth,
    localIndex: state.localIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () =>
      dispatch({
        type: "EMPTY_CART",
      }),
    onConfirmation: (confirm) =>
      dispatch({
        type: "SUCCESS",
        Confirmation: confirm,
      }),
    emptyDateTime: () =>
      dispatch({
        type: "EMPTY_STRING",
      }),
    noConfirmation: () =>
      dispatch({
        type: "NO_CONFIRM",
      }),
    emptyOrderDetails: () =>
      dispatch({
        type: "EMPTY_ORDERS",
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
