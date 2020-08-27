import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking, Share } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import fonts from "./fonts";
import color from "./color";

import { showMessage } from "react-native-flash-message";
import routes from "../Navigations/routes";

import { connect } from "react-redux";

function DrawerStyle({
  navigation,
  login,
  disableAddressNOrders = true,
  addLoginCredentials,
}) {
  const [userContact, setUserContact] = useState("Welcome");
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
        {login.mobileNumber === 0 && login.loginSuccess === false ? (
          <Text style={{ marginLeft: 15, fontSize: 20, fontFamily: fonts.ssl }}>
            {userContact}
          </Text>
        ) : (
          <Text style={{ marginLeft: 15, fontSize: 20, fontFamily: fonts.ssl }}>
            {login.mobileNumber}
          </Text>
        )}
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
        {login.loginSuccess === false ? (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate(routes.LOGIN);
            }}
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
        ) : null}
        {login.loginSuccess === true ? (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 12,
              marginBottom: 20,
            }}
            onPress={() => navigation.navigate(routes.MY_ADDRESS)}
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
        ) : (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 12,
              marginBottom: 20,
            }}
            disabled={disableAddressNOrders}
            onPress={() => navigation.navigate(routes.MY_ADDRESS)}
          >
            <Entypo name="location" size={22} color={color.lightdarkGray} />
            <Text
              style={{
                color: color.lightdarkGray,
                fontFamily: fonts.ssl,
                marginHorizontal: 10,
                fontSize: 12,
              }}
            >
              My Addresses
            </Text>
          </TouchableOpacity>
        )}
        {login.loginSuccess === true ? (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              marginBottom: 20,
            }}
            onPress={() => navigation.navigate(routes.MY_ORDERS)}
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
        ) : (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              marginBottom: 20,
            }}
            disabled={disableAddressNOrders}
            onPress={() =>
              navigation.navigate(routes.MY_ORDERS, { ordersData: true })
            }
          >
            <MaterialCommunityIcons
              name="hexagon-slice-6"
              size={24}
              color={color.lightdarkGray}
            />
            <Text
              style={{
                color: color.lightdarkGray,
                fontFamily: fonts.ssl,
                marginHorizontal: 10,
                fontSize: 12,
              }}
            >
              My Orders
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            marginBottom: 20,
          }}
          onPress={() =>
            navigation.navigate(routes.CART, {
              NotProceedShow: false,
              NotShowTotal: false,
            })
          }
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
          onPress={() => {
            showMessage({
              message: "No new offers for now.",
              type: "info",
              backgroundColor: color.lightgray,
              color: "black",
              position: "bottom",
              style: {
                borderRadius: 50,
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              },
            });
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
          onPress={() => navigation.navigate(routes.NEED_HELP)}
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
          onPress={() =>
            Linking.openURL("market://details?id=com.matechco.hummart")
          }
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
          onPress={() =>
            Share.share({
              title: "Hum Mart App",
              message:
                "Download HumMart app at : https://play.google.com/store/apps/details?id=com.matechco.hummart",
            })
          }
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
          onPress={() => navigation.navigate(routes.TERMS_AND_CONDITION)}
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
          onPress={() => navigation.navigate(routes.PRIVATE_POLICY)}
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
          onPress={() => navigation.navigate(routes.CONTACT_US)}
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
          onPress={() => navigation.navigate(routes.ABOUTUS)}
        >
          <FontAwesome5 name="info" size={18} color="black" />
          <Text
            style={{ fontFamily: fonts.ssl, marginHorizontal: 8, fontSize: 12 }}
          >
            About Us
          </Text>
        </TouchableOpacity>
        {login.loginSuccess && (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 8,
              paddingTop: 15,
              marginBottom: 20,
              borderTopWidth: 0.8,
              borderTopColor: color.lightdarkGray,
            }}
            onPress={() => (
              addLoginCredentials({
                mobileNumber: 0,
                loginSuccess: false,
              }),
              navigation.navigate(routes.HOME)
            )}
          >
            <SimpleLineIcons name="logout" size={18} color="black" />

            <Text
              style={{
                fontFamily: fonts.ssl,
                marginHorizontal: 8,
                fontSize: 12,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        )}
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
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addLoginCredentials: (credential) =>
      dispatch({
        type: "CREDENTIALS",
        payload: credential,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerStyle);