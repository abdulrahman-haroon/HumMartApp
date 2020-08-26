import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";
import PaymentTabsNavigation from "../../Navigations/PaymentTabsNavigation";
import routes from "../../Navigations/routes";

import { showMessage } from "react-native-flash-message";
import AwesomeAlert from "react-native-awesome-alerts";

import { connect } from "react-redux";

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
}) {
  const [orderId, setOrderId] = useState(
    (Math.round(Math.random() * 10000000000) + 1).toString()
  );
  const [showAlert, setShowAlert] = useState(false);

  const [ptcDate, setPtcDate] = useState("");
  const [ptcTime, setPtcTime] = useState("");

  const [isConfirmed, setIsConfirmed] = useState("No");

  var TimeType;
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hour = new Date().getHours();

  if (hour <= 11) TimeType = "AM";
  else TimeType = "PM";

  if (hour > 12) hour = hour - 12;
  if (hour == 0) hour = 12;

  var minutes = new Date().getMinutes();
  if (minutes < 10) minutes = "0" + minutes.toString();

  var seconds = new Date().getSeconds();
  if (seconds < 10) seconds = "0" + seconds.toString();

  const showDateTime = () => {
    setPtcDate(
      date.toString() + "-" + month.toString() + "-" + year.toString()
    );
    setPtcTime(
      hour.toString() +
        ":" +
        minutes.toString() +
        ":" +
        seconds.toString() +
        " " +
        TimeType
    );
  };
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
              confirmationPTC === "No" ? setShowAlert(true) : null
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
              ? (addOrdersDetails({
                  optionNickName: addressSend[keySelect].optionNickName,
                  city: addressSend[keySelect].city,
                  email: addressSend[keySelect].email,
                  houseNo: addressSend[keySelect].houseNo,
                  name: addressSend[keySelect].name,
                  radioButton: addressSend[keySelect].radioButton,
                  sector: addressSend[keySelect].sector,
                  total: Total.totalPrice,
                  subTotal: sTotal.sTotal,
                  date: ptcDate,
                  time: ptcTime,
                  schedule: route.params.dateTime,
                  orderNumber: orderId,
                  cartItem: cartItem,
                }),
                onConfirmation(true),
                navigation.navigate(routes.MY_ORDERS, {
                  ordersData: true,
                  date: ptcDate,
                  time: ptcTime,
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
          setShowAlert(false);
        }}
        onConfirmPressed={() => {
          showDateTime();
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
    cartItem: state.cartItem,
    sTotal: state.subTotal,
    Total: state.sumTotal,
    ordersDetails: state.ordersDetails,
    addressSend: state.address,
    keySelect: state.keySelection,
    onSuccessPTC: state.onSuccessPTC,
    confirmationPTC: state.confirmationPTC,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PTC_PlaceOrder);
