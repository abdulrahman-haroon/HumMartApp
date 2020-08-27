import React from "react";
import { View, Text } from "react-native";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import { connect } from "react-redux";

function PTC_Address({ addressSend, keySelect }) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 15,
      }}
    >
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
              {addressSend[keySelect].optionNickName}
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
              {addressSend[keySelect].radioButton} {addressSend[keySelect].name}
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
              {addressSend[keySelect].email}
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
              {addressSend[keySelect].houseNo} , {addressSend[keySelect].sector}
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
              {addressSend[keySelect].city}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    addressSend: state.address,
    keySelect: state.keySelection,
  };
};
export default connect(mapStateToProps)(PTC_Address);
