import React from "react";
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

const validationScheme = Yup.object().shape({
  mobileNumber: Yup.string()
    .required()
    .min(11, "Mobile number must be atleast 11 digits")
    .max(11, "Sorry Please Enter Correct Number")
    .label("Mobile Number"),
});

function Login({ navigation, addLoginCredentials }) {
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
          onSubmit={(values, action) => (
            addLoginCredentials({
              mobileNumber: values.mobileNumber,
              loginSuccess: true,
            }),
            action.resetForm(),
            navigation.navigate(routes.HOME)
          )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
