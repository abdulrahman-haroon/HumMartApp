import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

import HeaderNavigation from "../component/HeaderNavigation";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import color from "../styles/color";
import font from "../styles/fonts";
import AddressesCard from "../component/Cards/AddressesCard";
import FormAddress from "../component/Form/FormAddress";



function MyAddresses({ navigation, route }) {
  let data = route.params;
 
  const [visibleModal,setVisibleModal]= useState(false);

  const [addressData, setAddressData] = useState([]);
  
  const addAddress=(addNew)=>{
     setAddressData((currentAddress)=>{
       return [addNew,...currentAddress]
     });
     setVisibleModal(false);
    }
  
  // console.log(addressData)
  // console.log(addAddress());
  return (
    <View style={{ flex: 1 }}>
      <Modal visible={visibleModal} >
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
         onPress={()=>setVisibleModal(false)}
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
