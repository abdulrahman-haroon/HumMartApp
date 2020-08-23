import React from "react";
import { View, Text } from "react-native";

import HeaderNavigation from "../component/HeaderNavigation";
import color from "../styles/color";
import fonts from "../styles/fonts";
import OrdersComponent from "../component/OrdersComponent";

function MyOrders({ navigation, route }) {
  let ordersData = route.params;

  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation
        title="My Orders"
        showIcons={false}
        navigation={navigation}
        drawer
      />
      {ordersData.ordersData === false ? (
        <View
          style={{
            flex: 1,
            backgroundColor: color.lightdarkGray,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 18, fontFamily: fonts.ssl, fontWeight: "600" }}
          >
            No Orders
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <OrdersComponent navigation={navigation} data={ordersData} />
        </View>
      )}
    </View>
  );
}

export default MyOrders;
