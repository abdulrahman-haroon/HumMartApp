import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";
import PaymentTabsNavigation from "../../Navigations/PaymentTabsNavigation";
import routes from "../../Navigations/routes";

function PTC_PlaceOrder({ navigation, total }) {
  return (
    <View style={styles.container}>
      <HeaderNavigation
        showIcons={false}
        title="Place Order"
        navigation={navigation}
        drawer
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          backgroundColor: "white",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: fonts.sst,
              fontWeight: "bold",
              marginRight: 8,
            }}
          >
            Amount Payable
          </Text>
          <Text
            style={{
              fontFamily: fonts.sst,
              fontWeight: "bold",
              marginRight: 8,
              color: color.lightdarkGray,
            }}
          >
            (Incl. of all taxes)
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 10,
            }}
          >
            <Text>PKR {total}</Text>
          </View>
        </View>
      </View>
      <PaymentTabsNavigation />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(routes.MY_ORDERS, { ordersData: false })
        }
      >
        <View
          style={{
            height: 50,
            flexDirection: "row",
            backgroundColor: color.orangeDark,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 10,
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                color: "white",
                fontSize: 15,
              }}
            >
              Place Order
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});

export default PTC_PlaceOrder;
