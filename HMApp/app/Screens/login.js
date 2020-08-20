import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  TouchableHighlight,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import FlatButton from "../styles/button";
import fonts from "../styles/fonts";
import color from "../styles/color";
import ErrorMessage from "../component/Form/ErrorMessage";

const validationScheme = Yup.object().shape({
  mobileNumber: Yup.string()
    .required()
    .min(11, "Mobile number must be atleast 11 digits")
    .max(11, "Sorry Please Enter Correct Number")
    .label("Mobile Number"),
});

export default function Login({ navigation, route }) {
  //FIXME: SET STATE USER CONTANT
  // const data = route.params;

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
          onSubmit={(values) => navigation.navigate("Home")}
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
                <FlatButton text="next" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
        {/* <View style={{ paddingRight: 10 }}>
            <TextInput
              style={styles.tiStyle1}
              placeholder="+92"
              keyboardType="numeric"
              editable={false}
              placeholderTextColor="black"
            />
          </View>
          <View>
            <TextInput
              style={styles.tiStyle2}
              placeholder="Mobile"
              keyboardType="numeric"
            />
          </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //   justifyContent: "flex-end",
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
