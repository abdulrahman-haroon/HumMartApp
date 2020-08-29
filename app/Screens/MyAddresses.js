import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

import HeaderNavigation from "../component/HeaderNavigation";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import color from "../styles/color";
import font from "../styles/fonts";
import AddressesCard from "../component/Cards/AddressesCard";
import FormAddress from "../component/Form/FormAddress";
import { ScrollView } from "react-native-gesture-handler";
import EditFormAddress from "../component/Form/EditFormAddress";

import { connect } from "react-redux";

function MyAddresses({
  navigation,
  dataAddresses,
  addressSend,
  usersData,
  localIndex,
  addAddressData,
  updateAddressData,
  login,
  removeAddressData,
}) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleEditModal, setVisibleEditModal] = useState(false);

  const [addressData, setAddressData] = useState([]);

  const [selectedKey, setSelectedKey] = useState();

  const addAddress = (addNew) => {
    // addAddressData(addNew);
    updateAddressData(login.mobileNumber, addNew);
    setVisibleModal(false);
  };

  const removeAddress = (address) => {
    setAddressData(
      addressData.filter((name) => address.houseNo != name.houseNo)
    );
    removeAddressData(login.mobileNumber, address.houseNo);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal visible={visibleModal}>
        <View>
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
              onPress={() => setVisibleModal(false)}
            />

            <Text
              numberOfLines={1}
              style={{ flex: 7, color: "white", fontFamily: font.ssl }}
            >
              Add Address
            </Text>
          </View>
        </View>
        <FormAddress addAddress={addAddress} />
      </Modal>
      <Modal visible={visibleEditModal}>
        <View>
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
              onPress={() => setVisibleEditModal(false)}
            />

            <Text
              numberOfLines={1}
              style={{ flex: 7, color: "white", fontFamily: font.ssl }}
            >
              Edit Address
            </Text>
          </View>
        </View>
        {usersData[localIndex] === undefined ? null : (
          <EditFormAddress
            allData={usersData[localIndex].userAllAddress}
            selectedKey={selectedKey}
            setVisibleEditModal={(value) => setVisibleEditModal(value)}
          />
        )}
      </Modal>
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
          onPress={() => navigation.goBack()}
        />

        <Text
          numberOfLines={1}
          style={{ flex: 7, color: "white", fontFamily: font.ssl }}
        >
          Choose Address
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: color.lightLightGray,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 15,
          }}
          onPress={() => setVisibleModal(true)}
        >
          <AntDesign
            name="pluscircleo"
            size={24}
            color={color.orangeDark}
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontFamily: font.ssl, fontSize: 14 }}>
            Add a new address
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* after PTC this will show  */}
        {usersData[localIndex] === undefined || localIndex === null
          ? null
          : usersData[localIndex].userAllAddress.map((item, key) => (
              <AddressesCard
                key={key}
                indexKey={key}
                item={item}
                respect={item.radioButton}
                nickName={item.optionNickName}
                name={item.name}
                email={item.email}
                houseNo={item.houseNo}
                sector={item.sector}
                city={item.city}
                removeAddress={() => removeAddress(item, key)}
                setVisibleEditModal={(value) => setVisibleEditModal(value)}
                setSelectedKey={(key) => setSelectedKey(key)}
                onClickMe={false}
              />
            ))}
        {/* this is current data in the array */}
        {/* {addressSend.length != 0 &&
          addressSend.map((item, key) => (
            <AddressesCard
              key={key}
              indexKey={key}
              item={item}
              respect={item.radioButton}
              nickName={item.optionNickName}
              name={item.name}
              email={item.email}
              houseNo={item.houseNo}
              sector={item.sector}
              city={item.city}
              removeAddress={() => removeAddress(item, key)}
              setVisibleEditModal={(value) => setVisibleEditModal(value)}
              setSelectedKey={(key) => setSelectedKey(key)}
              onClickMe={false}
            />
          ))} */}
      </ScrollView>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    addressSend: state.address,
    usersData: state.usersData,
    localIndex: state.localIndex,
    login: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dataAddresses: (address) =>
      dispatch({
        type: "ADDRESSES",
        payload: address,
      }),
    addAddressData: (address) =>
      dispatch({
        type: "ADDRESSES_ADD",
        payload: address,
      }),
    updateAddressData: (phoneNo, address) =>
      dispatch({
        type: "UPDATE_ADDRESS_DETAILS",
        phoneNo: phoneNo,
        allAddress: address,
      }),
    removeAddressData: (phoneNo, houseNo) =>
      dispatch({
        type: "DELETE_ADDRESS_DETAILS",
        phoneNo: phoneNo,
        houseNo: houseNo,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyAddresses);
