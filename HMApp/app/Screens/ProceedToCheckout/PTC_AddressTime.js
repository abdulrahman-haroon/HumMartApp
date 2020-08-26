import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { date } from "yup";
import routes from "../../Navigations/routes";

import { connect } from "react-redux";
import PTC_Address from "../../component/Cards/PTC_Address";
import AddressSelection from "../AddressSelection";

import { showMessage } from "react-native-flash-message";

function PTC_AddressTime({ navigation, cartItem, dateTime, setDate_Time }) {
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
            ? navigation.navigate(routes.PTC_PLACE_ORDER, {
                dateTime: dateData,
              })
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PTC_AddressTime);
