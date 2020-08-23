import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function PTC_ViewDetails({
  navigation,
  route,
  total = 0,
  counterItems = 0,
  subTotal = 0,
  savings = 0,
}) {
  const data = route.params;
  return (
    <View style={styles.container}>
      <HeaderNavigation
        title="Order Detail"
        showIcons={false}
        navigation={navigation}
        drawer
      />
      <View style={{ alignSelf: "center", marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: fonts.ssl,
            fontSize: 15,
            fontWeight: "bold",
            color: color.darkishLight,
          }}
        >
          Placed {data.orderData.date} {data.orderData.time}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <Text
            style={{
              fontFamily: fonts.ssl,
              color: color.darkishLight,
              marginBottom: 10,
            }}
          >
            Delivery Charges
          </Text>
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Schedule for {data.orderData.schedule}
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              borderTopColor: color.lightdarkGray,
              borderTopWidth: 0.8,
            }}
          >
            <MaterialCommunityIcons
              name="cash-multiple"
              size={24}
              color="black"
              style={{ marginVertical: 10, marginHorizontal: 10 }}
            />
            <Text
              style={{
                marginVertical: 13,
                marginHorizontal: 10,
                color: color.darkishLight,
                fontFamily: fonts.ssl,
              }}
            >
              Pay on Delivery
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 13,
              marginHorizontal: 10,
              color: color.darkishLight,
              fontFamily: fonts.ssl,
            }}
          >
            You have to pay PKR {total} to delivery executive
          </Text>
        </View>
      </View>
      <Text
        style={{
          alignSelf: "center",
          marginVertical: 10,
          marginHorizontal: 10,
          fontFamily: fonts.ssl,
          fontSize: 15,
          fontWeight: "bold",
          color: color.darkishLight,
        }}
      >
        {counterItems} Items(s) Amount: (PKR {total})
      </Text>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* TODO: here there will be items that is placed to be ordered. */}
        <Text>Data of items FLATLIST</Text>
      </View>

      <Text
        style={{
          alignSelf: "center",
          marginVertical: 10,
          marginHorizontal: 10,
          fontFamily: fonts.ssl,
          fontSize: 15,
          fontWeight: "bold",
          color: color.darkishLight,
          textTransform: "uppercase",
        }}
      >
        Payment Summary
      </Text>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginVertical: 10,
              marginHorizontal: 10,
              width: "65%",
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                fontFamily: fonts.ssl,
                fontWeight: "bold",
              }}
            >
              Sub total
            </Text>
            <Text
              style={{
                marginBottom: 10,
                fontFamily: fonts.ssl,
                fontWeight: "bold",
              }}
            >
              Delivery Charges
            </Text>
          </View>
          <View
            style={{
              flex: 1,

              marginVertical: 10,
              marginHorizontal: 10,
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                color: color.darkishLight,
                fontFamily: fonts.ssl,
                marginBottom: 10,
              }}
            >
              PKR {subTotal}
            </Text>
            <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
              PKR 100
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            borderTopWidth: 0.8,
            borderTopColor: color.lightdarkGray,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Total payment amount
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              PKR {total}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            borderTopWidth: 0.8,
            borderTopColor: color.lightdarkGray,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.ssl,
              color: color.lightRed,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Your total savings
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                color: color.lightRed,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              PKR {savings}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text>Address</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="briefcase"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontSize: 15,
              marginTop: 3,
            }}
          >
            Order ID: {data.orderId}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PTC_ViewDetails;
