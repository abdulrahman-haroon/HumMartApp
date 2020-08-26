import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

import HeaderNavigation from "../component/HeaderNavigation";
import color from "../styles/color";
import fonts from "../styles/fonts";
import OrdersComponent from "../component/OrdersComponent";

import { connect } from "react-redux";

function MyOrders({ navigation, route, ordersDetails }) {
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
          <ScrollView>
            {ordersDetails.map((item, key) => (
              <OrdersComponent
                key={key}
                data={item}
                navigation={navigation}
                date={item.date}
                time={item.time}
                schedule={item.schedule}
                subtotal={item.subTotal}
                total={item.total}
                orderNumber={item.orderNumber}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    ordersDetails: state.ordersDetails,
  };
};

export default connect(mapStateToProps)(MyOrders);
