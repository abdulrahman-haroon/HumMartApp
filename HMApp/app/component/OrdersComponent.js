import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import color from "../styles/color";
import fonts from "../styles/fonts";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import FlatButton from "../styles/button";
import routes from "../Navigations/routes";

function OrdersComponent({ navigation, data, subtotal = 0, total = 0 }) {
  const [orderId, setOrderId] = useState(
    (Math.round(Math.random() * 10000000000) + 1).toString()
  );
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center", marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: fonts.ssl,
            fontSize: 15,
            fontWeight: "bold",
            color: color.darkishLight,
          }}
        >
          Placed {data.date} {data.time}
        </Text>
      </View>
      <View
        style={{
          width: "95%",
          backgroundColor: "white",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        <View style={{ alignSelf: "center", marginVertical: 10 }}>
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontSize: 13,
            }}
          >
            Scheduled for {data.schedule}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            borderWidth: 0.6,
            borderColor: color.darkishLight,
            marginBottom: 10,
          }}
        >
          <Text style={{ marginHorizontal: 15, marginTop: 8 }}>
            Delivered by HumMart
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderTopWidth: 0.6,
              borderTopColor: color.lightdarkGray,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ width: "10%" }}>
                <MaterialCommunityIcons
                  name="file-document-box-multiple-outline"
                  size={24}
                  color="green"
                  style={{ marginTop: 10 }}
                />
              </View>
              <View
                style={{
                  width: "65%",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
                  Total Amount
                </Text>
                <Text
                  style={{ fontFamily: fonts.ssl, color: color.darkishLight }}
                >
                  Delivery Charges
                </Text>
                <Text
                  style={{ fontFamily: fonts.ssl, color: color.darkishLight }}
                >
                  Order ID: {orderId}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: 10,
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
                  PKR {subtotal}
                </Text>
                <Text
                  style={{ fontFamily: fonts.ssl, color: color.darkishLight }}
                >
                  PKR 100
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
            Total payable amount
          </Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
              PKR {total}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <FlatButton
            text="View Details"
            onPress={() =>
              navigation.navigate(routes.VIEWDETAILS, {
                orderData: data,
                orderId: orderId,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: color.lightdarkGray,
  },
});

export default OrdersComponent;
