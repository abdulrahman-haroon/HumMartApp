import React, { useState } from "react";
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

function MyAddresses({ navigation, dataAddresses, addressSend, onClickMe }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleEditModal, setVisibleEditModal] = useState(false);

  const [addressData, setAddressData] = useState([]);

  const [selectedKey, setSelectedKey] = useState();

  const addAddress = (addNew) => {
    setAddressData(() => [...addressData, addNew]);
    setVisibleModal(false);
  };

  const removeAddress = (address) => {
    setAddressData(
      addressData.filter((name) => address.houseNo != name.houseNo)
    );
  };
  if (visibleModal === false || visibleEditModal === false)
    dataAddresses(addressData);
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
        <EditFormAddress
          allData={addressData}
          selectedKey={selectedKey}
          setVisibleEditModal={(value) => setVisibleEditModal(value)}
        />
      </Modal>
      <HeaderNavigation
        navigation={navigation}
        title="Choose Address"
        showIcons={false}
        drawer
      />

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
        {addressSend.length != 0 &&
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
          ))}
      </ScrollView>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    addressSend: state.address,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dataAddresses: (address) =>
      dispatch({
        type: "ADDRESSES",
        payload: address,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyAddresses);
