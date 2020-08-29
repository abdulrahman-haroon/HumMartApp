import React from "react";
import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import color from "../styles/color";
import fonts from "../styles/fonts";
import AddressesCard from "../component/Cards/AddressesCard";
import { ScrollView } from "react-native-gesture-handler";

import { connect } from "react-redux";

function AddressSelection({
  setShowSelection,
  addressSend,
  usersData,
  localIndex,
}) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
          onPress={() => setShowSelection(false)}
        />

        <Text
          numberOfLines={1}
          style={{ flex: 7, color: "white", fontFamily: fonts.ssl }}
        >
          Choose Address
        </Text>
      </View>
      {usersData[localIndex] === undefined ? null : (
        <ScrollView>
          {usersData[localIndex].userAllAddress.map((item, key) => (
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
              notShowDelete
              notShowEdit
              setShowSelection={(value) => setShowSelection(value)}
              onClickMe={true}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    addressSend: state.address,
    keySelect: state.keySelection,
    usersData: state.usersData,
    localIndex: state.localIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dataAddresses: (address) =>
      dispatch({
        type: "ADDRESSES",
        payload: address,
      }),
    keySelection: (key) =>
      dispatch({
        type: "ADDRESS_SELECTION",
        addressSelected: key,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddressSelection);
