import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import PaymentTabsNavigation from "../../Navigations/PaymentTabsNavigation";
import routes from "../../Navigations/routes";

import { showMessage } from "react-native-flash-message";
import AwesomeAlert from "react-native-awesome-alerts";

import { connect } from "react-redux";
import localIndex from "../../src/reducers/localIndex";

function PTC_PlaceOrder({
  navigation,
  Total,
  route,
  addOrdersDetails,
  sTotal,
  addressSend,
  keySelect,
  ordersDetails,
  cartItem,
  onSuccessPTC,
  onConfirmation,
  confirmationPTC,
  isConfirmation,
  usersData,
  addUserDetails,
  login,
  sameMobileNo,
  checkSame,
  updateUserCompleteData,
  localIndex,
  currentDate,
  currentTime,
}) {
  const [orderId, setOrderId] = useState(
    (Math.round(Math.random() * 10000000000) + 1).toString()
  );
  const [showAlert, setShowAlert] = useState(false);

  const [ptcDate, setPtcDate] = useState("");
  const [ptcTime, setPtcTime] = useState("");

  const [isConfirmed, setIsConfirmed] = useState("No");
  console.log(currentDate);
  return (
    <>
      <View style={styles.container}>
        <HeaderNavigation
          showIcons={false}
          title="Place Order"
          navigation={navigation}
          drawer
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.sst,
                fontWeight: "bold",
                marginRight: 8,
              }}
            >
              Amount Payable
            </Text>
            <Text
              style={{
                fontFamily: fonts.sst,
                fontWeight: "bold",
                marginRight: 8,
                color: color.lightdarkGray,
              }}
            >
              (Incl. of all taxes)
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: 10,
              }}
            >
              <Text>PKR {Total.totalPrice}</Text>
            </View>
          </View>
        </View>
        <PaymentTabsNavigation />
        <View
          style={{
            backgroundColor: color.lightgray,
            alignItems: "flex-end",
            paddingBottom: 5,
            paddingRight: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              confirmationPTC === "No"
                ? (setShowAlert(true),
                  updateUserCompleteData(login.mobileNumber, {
                    optionNickName:
                      usersData[localIndex].userAllAddress[keySelect]
                        .optionNickName,
                    city: usersData[localIndex].userAllAddress[keySelect].city,
                    email:
                      usersData[localIndex].userAllAddress[keySelect].email,
                    houseNo:
                      usersData[localIndex].userAllAddress[keySelect].houseNo,
                    name: usersData[localIndex].userAllAddress[keySelect].name,
                    radioButton:
                      usersData[localIndex].userAllAddress[keySelect]
                        .radioButton,
                    sector:
                      usersData[localIndex].userAllAddress[keySelect].sector,
                    total: Total.totalPrice,
                    subTotal: sTotal.sTotal,
                    date: currentDate,
                    time: currentTime,
                    schedule: route.params.dateTime,
                    orderNumber: orderId,
                    cartItem: cartItem,
                  }))
                : null
            }
          >
            <View
              style={{
                width: "20%",
                height: 50,
                flexDirection: "row",
                backgroundColor: color.orangeDark,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginVertical: 10,
                  marginHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.ssl,
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Confirm
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            confirmationPTC === "Yes"
              ? (sameMobileNo === false ? checkSame(true) : null,
                onConfirmation(true),
                navigation.navigate(routes.MY_ORDERS, {
                  ordersData: true,
                  date: currentDate,
                  time: currentTime,
                  schedule: route.params.dateTime,
                }))
              : showMessage({
                  message: "Please Confirm before you proceed!",
                  type: "warning",
                  color: "white",
                  position: "center",
                  style: {
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                })
          }
        >
          <View
            style={{
              height: 50,
              flexDirection: "row",
              backgroundColor: color.orangeDark,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  color: "white",
                  fontSize: 15,
                }}
              >
                Place Order
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Confirmation"
        message="Are you sure ?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Yes"
        confirmButtonColor={color.orangeDark}
        onCancelPressed={() => {
          isConfirmation("No"), setShowAlert(false);
        }}
        onConfirmPressed={() => {
          isConfirmation("Yes");
          showMessage({
            message: "Successfully Confirmed ! Click on Place Orders",
            type: "success",
            color: "white",
            position: "center",
            style: {
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            },
          });

          setShowAlert(false);
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
    login: state.login,
    cartItem: state.cartItem,
    sTotal: state.subTotal,
    Total: state.sumTotal,
    ordersDetails: state.ordersDetails,
    addressSend: state.address,
    keySelect: state.keySelection,
    onSuccessPTC: state.onSuccessPTC,
    confirmationPTC: state.confirmationPTC,
    usersData: state.usersData,
    sameMobileNo: state.sameMobileNo,
    localIndex: state.localIndex,
    currentDate: state.currentData,
    currentTime: state.currentTime,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addOrdersDetails: (details) =>
      dispatch({
        type: "ADD_ORDERS_DETAILS",
        payload: details,
      }),
    onConfirmation: (confirm) =>
      dispatch({
        type: "SUCCESS",
        Confirmation: confirm,
      }),
    isConfirmation: (isConfirm) =>
      dispatch({
        type: "ADD_CONFIRMATION",
        confirmYes: isConfirm,
      }),
    addUserDetails: (allData) =>
      dispatch({
        type: "ADD_USER_DETAILS",
        payload: allData,
      }),
    checkSame: (same) =>
      dispatch({
        type: "CHECK",
        check: same,
      }),
    updateUserCompleteData: (phoneNo, data) =>
      dispatch({
        type: "UPDATE_USER_DETAILS",
        payload: data,
        phoneNo: phoneNo,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PTC_PlaceOrder);
