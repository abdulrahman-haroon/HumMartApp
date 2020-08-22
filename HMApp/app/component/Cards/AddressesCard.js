import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import color from "../../styles/color";
import fonts from "../../styles/fonts";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AddressesCard({
  name,
  email,
  houseNo,
  sector,
  city,
  respect,
  nickName,
  removeAddress,
  setVisibleEditModal,
  indexKey,
  setSelectedKey,
  removeDelete,
}) {
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
              {nickName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => (
                setVisibleEditModal(true), setSelectedKey(indexKey)
              )}
              style={{ marginRight: 10 }}
            >
              <MaterialIcons name="edit" size={20} color="black" />
            </TouchableOpacity>

            {!removeDelete ? (
              <TouchableOpacity onPress={removeDelete}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={24}
                  color="black"
                  style={{ marginHorizontal: 10 }}
                />
              </TouchableOpacity>
            ) : null}
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
              {respect} {name}
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
              {email}
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
              {houseNo} , {sector}
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
              {city}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AddressesCard;
