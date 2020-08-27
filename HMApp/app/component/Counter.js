import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import color from "../styles/color";

import { connect } from "react-redux";

import { showMessage } from "react-native-flash-message";

function Counter({ item, addItemToCart, removeItem }) {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);
  const [visibleCounter, setVisibleCounter] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        style={{
          width: "80%",
          height: 30,
          backgroundColor: color.orangeDark,
          borderRadius: 5,
          marginVertical: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          setVisible(false),
            setVisibleCounter(true),
            addItemToCart(item),
            showMessage({
              message: "Item Added To Cart!",
              type: "success",
              color: "white",
              position: "center",
              style: {
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              },
            });
        }}
      >
        <Text style={{ color: "white" }}>ADD</Text>
      </TouchableOpacity>
      {/* TODO: this is just a animation that i was working on. */}
      {/* {visible === true ? (
        <TouchableOpacity
          style={{
            width: "80%",
            height: 30,
            backgroundColor: color.orangeDark,
            borderRadius: 5,
            marginVertical: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setVisible(false),
              setVisibleCounter(true),
              addItemToCart(item),
              sumSubTotal(item.price);
          }}
        >
          <Text style={{ color: "white" }}>ADD</Text>
        </TouchableOpacity>
      ) : null} */}
      {/* {visibleCounter === true ? (
        <View
          style={{
            height: 30,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Entypo
            name="circle-with-minus"
            size={24}
            color={color.orangeDark}
            style={{ width: 35 }}
            onPress={() => {
              count === 1
                ? (setVisible(true), setVisibleCounter(false), removeItem(item))
                : (setCount(count - 1), removeItem(item));
            }}
          />

          <Text style={{ fontSize: 15 }}> {count}</Text>

          <Entypo
            name="circle-with-plus"
            size={24}
            color={color.orangeDark}
            style={{ marginLeft: 12, width: 35 }}
            onPress={() => (setCount(count + 1), addItemToCart(item))}
          />
        </View>
      ) : null} */}
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItem: state.cartItem,
    countTracking: state.countTracking,
    sTotal: state.subTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product, count) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
        counter: count,
      }),
    removeItem: (product) =>
      dispatch({
        type: "REMOVE_TO_CART",
        payload: product,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
