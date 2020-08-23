import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import AddressesCard from "../../component/Cards/AddressesCard";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { date } from "yup";
import routes from "../../Navigations/routes";

function PTC_AddressTime({ navigation, cartItemCounter }) {
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
          {/* FIXME: this addressCard is wrong make a new component to get data from the storage of address.*/}
          <AddressesCard removeDelete />
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
            {dateData == undefined ? (
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
                {dateData}
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
          onPress={() =>
            navigation.navigate(routes.CART, {
              NotProceedShow: true,
              NotShowTotal: true,
            })
          }
        >
          <Text style={{ color: color.orangeDark }}>
            View {cartItemCounter} Item
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
          dateData !== undefined
            ? navigation.navigate(routes.PTC_PLACE_ORDER, {
                dateTime: dateData,
              })
            : alert("Please Fill the Date and Time");
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

export default PTC_AddressTime;
