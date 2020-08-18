import React from "react";
import { View, Text } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import AppButton from "./AppButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  respect: Yup.string().required().min(1).label("This"),
  nickName: Yup.string().required().min(1).label("This"),

  email: Yup.string().required().email().label("Email"),
  houseNo: Yup.string()
    .required()
    .min(1)
    .label("Address should be different from rest of addresses and"),
  sector: Yup.string().required().min(1).label("Area,Colony,Sector,Street"),
  city: Yup.string().required().label("City"),
});

function FormAddress({ addAddress }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 25, marginVertical: 5 }}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            houseNo: "",
            sector: "",
            city: "",
            respect: "",
            nickName: "",
          }}
          onSubmit={(values, actions) => {
            addAddress(values);
            //FIXME:
            // actions.resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            errors,
            touched,
            setFieldTouched,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <>
              <AppTextInput
                placeholder="Mr, Mrs, Miss"
                autoCorrect={false}
                name="respect"
                onChangeText={handleChange("respect")}
                onBlur={() => setFieldTouched("respect")}
                value={values.respect}
              />
              <ErrorMessage visible={touched.respect} error={errors.respect} />

              <AppTextInput
                placeholder="Name"
                autoCorrect={false}
                name="name"
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                value={values.name}
                //this will work then you will use action.resetForm()
              />
              <ErrorMessage visible={touched.name} error={errors.name} />

              <AppTextInput
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                keyboardType="email-address"
                value={values.email}
                //this will work then you will use action.resetForm()
              />
              <ErrorMessage visible={touched.email} error={errors.email} />

              <AppTextInput
                placeholder="Flat,House,Office No,Building,Company"
                autoCorrect={false}
                name="houseNo"
                onChangeText={handleChange("houseNo")}
                onBlur={() => setFieldTouched("houseNo")}
                multiline
                value={values.houseNo}
                //this will work then you will use action.resetForm()
              />
              <ErrorMessage visible={touched.houseNo} error={errors.houseNo} />
              <AppTextInput
                placeholder="Area,Colony,Sector,Street"
                autoCorrect={false}
                name="sector"
                onChangeText={handleChange("sector")}
                onBlur={() => setFieldTouched("sector")}
                multiline
                value={values.sector}
                //this will work then you will use action.resetForm()
              />
              <ErrorMessage visible={touched.sector} error={errors.sector} />
              <AppTextInput
                placeholder="City"
                autoCorrect={false}
                name="city"
                onChangeText={handleChange("city")}
                onFocus={() => setFieldTouched("city")}
                value={values.city}
                //this will work then you will use action.resetForm()
              />
              {touched.city || errors.city ? (
                <ErrorMessage visible={touched.city} error={errors.city} />
              ) : null}

              <Text
                style={{
                  marginVertical: 10,
                  fontFamily: fonts.ssl,
                  color: color.darkishLight,
                }}
              >
                Nickname of your address
              </Text>
              <AppTextInput
                placeholder="Home, Office, Others"
                autoCorrect={false}
                name="nickName"
                onChangeText={handleChange("nickName")}
                onBlur={() => setFieldTouched("nickName")}
                value={values.nickName}
              />
              <ErrorMessage
                visible={touched.nickName}
                error={errors.nickName}
              />

              <AppButton title="CONTINUE" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default FormAddress;
