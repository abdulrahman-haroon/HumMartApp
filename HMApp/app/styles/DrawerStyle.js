import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import fonts from "./fonts";
import color from "./color";

function DrawerStyle({ userContact, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 40,
          backgroundColor: color.lightgrayDrawer,
          marginTop: 25,
          justifyContent: "center",
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 20, fontFamily: fonts.ssl }}>
          {userContact}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: fonts.ssl,
            marginHorizontal: 10,
            marginTop: 15,
            marginBottom: 20,
            color: color.otherLightGray,
          }}
        >
          My Information
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <FontAwesome name="user" size={22} color="black" />
          <Text
            style={{
              fontFamily: fonts.ssl,
              marginHorizontal: 10,
              fontSize: 12,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 12,
            marginBottom: 20,
          }}
        >
          <Entypo name="location" size={22} color="black" />
          <Text
            style={{
              fontFamily: fonts.ssl,
              marginHorizontal: 10,
              fontSize: 12,
            }}
          >
            My Addresses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            marginBottom: 20,
          }}
        >
          <MaterialCommunityIcons
            name="hexagon-slice-6"
            size={24}
            color="black"
          />
          <Text
            style={{
              fontFamily: fonts.ssl,
              marginHorizontal: 10,
              fontSize: 12,
            }}
          >
            My Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            marginBottom: 20,
          }}
        >
          <FontAwesome5 name="shopping-cart" size={20} color="black" />
          <Text
            style={{
              fontFamily: fonts.ssl,
              marginHorizontal: 10,
              fontSize: 12,
            }}
          >
            My Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            paddingBottom: 10,
            borderBottomWidth: 0.8,
            borderBottomColor: color.lightdarkGray,
          }}
        >
          <Entypo name="ticket" size={24} color="black" />
          <Text
            style={{
              fontFamily: fonts.ssl,
              marginHorizontal: 10,
              fontSize: 12,
            }}
          >
            New Offers
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: fonts.ssl,
            color: color.otherLightGray,
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Others
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("NeedHelp")}
        >
          <FontAwesome5 name="fist-raised" size={20} color="black" />
          <Text
            style={{
              fontFamily: fonts.ssl,
              marginHorizontal: 10,
              fontSize: 12,
            }}
          >
            Need Help?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 8,
            marginBottom: 20,
          }}
        >
          <EvilIcons name="star" size={24} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 6, fontSize: 12 }}
          >
            Rate Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            marginBottom: 20,
          }}
        >
          <FontAwesome name="upload" size={22} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 8, fontSize: 12 }}
          >
            Share
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("TermsAndCondition")}
        >
          <FontAwesome name="code-fork" size={24} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 8, fontSize: 12 }}
          >
            Terms amd Condition
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <FontAwesome name="code-fork" size={24} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 8, fontSize: 12 }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <FontAwesome name="code-fork" size={24} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 8, fontSize: 12 }}
          >
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <FontAwesome5 name="info" size={18} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 8, fontSize: 12 }}
          >
            About Us
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 8,
            marginBottom: 20,
          }}
        >
          <FontAwesome5 name="info-circle" size={20} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 8, fontSize: 12 }}
          >
            About This Release 7.7
          </Text>
        </View>
      </View>
    </View>
  );
}

export default DrawerStyle;
