import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import routes from "../../Navigations/routes";

import { connect } from "react-redux";
import PTC_Address from "../../component/Cards/PTC_Address";
import AddressSelection from "../AddressSelection";

import { showMessage } from "react-native-flash-message";

function PTC_AddressTime({
  navigation,
  cartItem,
  dateTime,
  setDate_Time,
  currentTime,
  currentDate,
}) {
  const [showSelection, setShowSelection] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateData, setDateData] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateData(date.toString());
    setDate_Time(date.toString());
    hideDatePicker();
  };
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

  // useEffect(() => {
  //   setPtcDate(
  //     date.toString() + "-" + month.toString() + "-" + year.toString()
  //   );
  //   setPtcTime(
  //     hour.toString() +
  //       ":" +
  //       minutes.toString() +
  //       ":" +
  //       seconds.toString() +
  //       " " +
  //       TimeType
  //   );
  // }, []);
  return (
    <View style={styles.container}>
      <HeaderNavigation
        showIcons={false}
        title="Address and Data & Time"
        navigation={navigation}
        drawer
      />
      <View>
        <Text
          style={{
            color: color.darkishLight,
            fontSize: 16,
            fontFamily: fonts.sst,
            fontWeight: "bold",
            marginHorizontal: 15,
            marginVertical: 15,
          }}
        >
          Delivery Address
        </Text>
        <View style={{ width: "100%", backgroundColor: "white" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowSelection(true)}
          >
            <PTC_Address />
          </TouchableOpacity>
          <Modal visible={showSelection} animated={true}>
            <AddressSelection
              setShowSelection={(value) => setShowSelection(value)}
            />
          </Modal>
        </View>
        <Text
          style={{
            color: color.darkishLight,
            fontSize: 16,
            fontFamily: fonts.sst,
            fontWeight: "bold",
            marginHorizontal: 15,
            marginVertical: 15,
          }}
        >
          Delivery Date & Time
        </Text>
      </View>
      <View style={{ flex: 1, width: "100%", backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              marginVertical: 15,
              marginHorizontal: 15,
            }}
          >
            {dateTime == "" ? (
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Pick a Date & Time
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {dateTime}
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 20,
              marginTop: 15,
            }}
            onPress={showDatePicker}
          >
            <MaterialIcons name="edit" size={20} color="black" />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ marginHorizontal: 15, flexDirection: "row" }}
          onPress={() => navigation.navigate(routes.VIEW_CART_ITEM_SELECTED)}
        >
          <Text style={{ color: color.orangeDark }}>
            View {cartItem.length} Item
          </Text>
          <Ionicons
            name="ios-arrow-down"
            size={18}
            color="green"
            style={{
              marginLeft: 8,
              marginTop: 4,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          dateTime != ""
            ? (currentDate(
                date.toString() + "-" + month.toString() + "-" + year.toString()
              ),
              currentTime(
                hour.toString() +
                  ":" +
                  minutes.toString() +
                  ":" +
                  seconds.toString() +
                  " " +
                  TimeType
              ),
              navigation.navigate(routes.PTC_PLACE_ORDER, {
                dateTime: dateData,
              }))
            : showMessage({
                message: "Please select data and time!",
                type: "warning",
                color: "white",
                position: "center",
                style: {
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                },
              });
        }}
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
              Proceed To Payment
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
    dateTime: state.dateTime,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDate_Time: (dateTime) =>
      dispatch({
        type: "ADD_DATE_TIME",
        dateTime: dateTime,
      }),
    currentDate: (date) =>
      dispatch({
        type: "CURRENT_Date",
        date: date,
      }),
    currentTime: (time) =>
      dispatch({
        type: "CURRENT_TIME",
        time: time,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PTC_AddressTime);
