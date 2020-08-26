import React from "react";
import { View, Text } from "react-native";

import color from "../styles/color";
import fonts from "../styles/fonts";

import { Entypo, FontAwesome5 } from "@expo/vector-icons";

import { connect } from "react-redux";
import routes from "../Navigations/routes";

const ShoppingCart = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome5
        name="shopping-cart"
        size={20}
        color="white"
        style={{ paddingRight: 10 }}
        onPress={() =>
          props.navigation.navigate(routes.CART, {
            NotProceedShow: false,
            NotShowTotal: false,
          })
        }
      />
      <View
        style={{
          width: 18,
          height: 18,
          borderRadius: 18 / 2,
          backgroundColor: color.orangeDark,
          right: 15,
          bottom: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontFamily: fonts.ssl }}>
          {props.cartItem.length}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cartItem,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
