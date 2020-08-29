import React from "react";
import { View, Text } from "react-native";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import { connect } from "react-redux";

function PTC_Address({ usersData, keySelect, localIndex, addressSend }) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 15,
      }}
    >
      {usersData[localIndex] === undefined || localIndex === null ? null : (
        <View
          style={{
            borderWidth: 1,
            borderColor: color.lightdarkGray,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginBottom: 15,
              borderBottomWidth: 0.8,
              paddingBottom: 5,
              borderBottomColor: color.lightdarkGray,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {usersData[localIndex].userAllAddress[keySelect].optionNickName}
                {/* {addressSend[keySelect].optionNickName} */}
              </Text>
            </View>
          </View>

          <View style={{ marginLeft: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
                Name:{" "}
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontFamily: fonts.ssl, width: "80%" }}
              >
                {usersData[localIndex].userAllAddress[keySelect].radioButton}{" "}
                {usersData[localIndex].userAllAddress[keySelect].name}
                {/* {addressSend[keySelect].radioButton}{" "} */}
                {/* {addressSend[keySelect].name} */}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
                Email:{" "}
              </Text>
              <Text
                style={{ fontFamily: fonts.ssl, width: "80%" }}
                numberOfLines={1}
              >
                {usersData[localIndex].userAllAddress[keySelect].email}
                {/* {addressSend[keySelect].email} */}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
                Address:{" "}
              </Text>
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  width: "80%",
                }}
                numberOfLines={3}
              >
                {usersData[localIndex].userAllAddress[keySelect].houseNo}{" "}
                {usersData[localIndex].userAllAddress[keySelect].sector}
                {/* {addressSend[keySelect].houseNo} ,{" "} */}
                {/* {addressSend[keySelect].sector} */}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
                City:{" "}
              </Text>
              <Text
                style={{ fontFamily: fonts.ssl, width: "80%" }}
                numberOfLines={1}
              >
                {usersData[localIndex].userAllAddress[keySelect].city}
                {/* {addressSend[keySelect].city} */}
              </Text>
            </View>
          </View>
        </View>
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
export default connect(mapStateToProps)(PTC_Address);
