import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import HeaderNavigation from "../component/HeaderNavigation";

import { AntDesign } from "@expo/vector-icons";

import color from "../styles/color";
import font from "../styles/fonts";
import AddressesCard from "../component/AddressesCard";

// const [addressData, setAddressData] = useState([]);

// const dataArray = (data) => {
//   setAddressData((currentAddresses) => {
//     return [...currentAddresses, data];
//   });
// };

function MyAddresses({ navigation, route }) {
  let data = route.params;
  // console.log(data);
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        navigation={navigation}
        title="Choose Address"
        showIcons={false}
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
          onPress={() => navigation.navigate("FormAddress")}
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
      <View>
        {data != null && (
          <AddressesCard
            respect={data.data}
            nickName={data.data2}
            name={data.values.name}
            email={data.values.email}
            houseNo={data.values.houseNo}
            sector={data.values.sector}
            city={data.values.city}
          />
        )}
      </View>
    </View>
  );
}

export default MyAddresses;
