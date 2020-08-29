import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import FlatButton from "../styles/button";
import fonts from "../styles/fonts";
import color from "../styles/color";
import ErrorMessage from "../component/Form/ErrorMessage";

import { connect } from "react-redux";
import routes from "../Navigations/routes";

import { showMessage } from "react-native-flash-message";

const validationScheme = Yup.object().shape({
  mobileNumber: Yup.string()
    .required()
    .min(10, "Mobile number must be atleast 10 digits")
    .max(10, "Sorry Please Enter Correct Number")
    .label("Mobile Number"),
});

function Login({
  navigation,
  addLoginCredentials,
  usersData,
  storeIndex,
  globalIndexAuth,
  localIndex,
  localIndexStore,
  innerIndex,
  innerIncrement,
  checkSame,
  addUserDetails,
  login,
  ordersDetails,
  addressSend,
}) {
  // console.log(usersData[0].orderDeatilsData[0].cartItem[0].description);
  // console.log(usersData[0].orderDeatilsData[0].city);
  // console.log(usersData);
  // console.log(login);

  const handleSubmit = ({ mobileNumber }, action) => {
    {
      addLoginCredentials({
        mobileNumber: mobileNumber,
        loginSuccess: true,
      });
      let valid = false;

      usersData.forEach((item, index) => {
        if (mobileNumber === item.mobileNumber) {
          valid = true;
          checkSame(true);
          globalIndexAuth.forEach((item) => {
            if (index == item) localIndexStore(index);
          });
        }
      });
      if (valid == true) {
        addLoginCredentials({
          mobileNumber: mobileNumber,
          loginSuccess: true,
        }),
          action.resetForm(),
          showMessage({
            message: "Successfully Login!",
            type: "success",
            color: "white",
            position: "center",
            style: {
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            },
          }),
          navigation.navigate(routes.HOME);
      } else {
        // New user
        storeIndex(innerIncrement);
        localIndexStore(innerIncrement);
        addLoginCredentials({
          mobileNumber: mobileNumber,
          loginSuccess: true,
        }),
          addUserDetails({
            mobileNumber: mobileNumber,
            orderDetailsData: ordersDetails,
            userAllAddress: addressSend,
          }),
          action.resetForm();
        showMessage({
          message: "Successfully Login!",
          type: "success",
          color: "white",
          position: "center",
          style: {
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          },
        });
        navigation.navigate(routes.HOME);
        innerIndex();
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          We will send a SMS with a confirmation code to the number
        </Text>
        <Formik
          initialValues={{
            code: "+92",
            mobileNumber: "",
          }}
          validationSchema={validationScheme}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, errors, touched, handleSubmit }) => (
            <>
              <View style={styles.textInputStyle}>
                <View style={{ paddingRight: 10 }}>
                  <TextInput
                    style={styles.tiStyle1}
                    keyboardType="numeric"
                    editable={false}
                    placeholderTextColor="black"
                    name="code"
                    value={values.code}
                  />
                </View>
                <TextInput
                  style={styles.tiStyle2}
                  placeholder="Mobile Number"
                  keyboardType="numeric"
                  name="mobileNumber"
                  onChangeText={handleChange("mobileNumber")}
                  value={values.mobileNumber}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <ErrorMessage
                  error={errors.mobileNumber}
                  visible={touched.mobileNumber}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <FlatButton
                  text="next"
                  onPress={handleSubmit}
                  addColor="darkishLight"
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textStyle: {
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    fontSize: 18,
    color: color.gray,
    textAlign: "center",
    fontFamily: fonts.sst,
  },
  tiStyle1: {
    color: "black",
    borderBottomWidth: 2,
  },
  tiStyle2: {
    color: "black",
    borderBottomWidth: 2,
  },
  textInputStyle: {
    flexDirection: "row",
  },
});
const mapStateToProps = (state) => {
  return {
    login: state.login,
    usersData: state.usersData,
    globalIndexAuth: state.globalIndexAuth,
    localIndex: state.localIndex,
    innerIncrement: state.innerIncrement,
    ordersDetails: state.ordersDetails,
    addressSend: state.address,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addLoginCredentials: (credential) =>
      dispatch({
        type: "CREDENTIALS",
        payload: credential,
      }),
    storeIndex: (index) =>
      dispatch({
        type: "GET_INDEX",
        index: index,
      }),
    localIndexStore: (localKey) =>
      dispatch({
        type: "LOCAL_INDEX",
        localkey: localKey,
      }),
    innerIndex: () =>
      dispatch({
        type: "INCREAMENT",
      }),
    checkSame: (same) =>
      dispatch({
        type: "CHECK",
        check: same,
      }),
    addUserDetails: (allData) =>
      dispatch({
        type: "ADD_USER_DETAILS",
        payload: allData,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
