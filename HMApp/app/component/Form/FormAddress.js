import React, { useState } from "react";
import { View, Text } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import AppButton from "./AppButton";
import RadioButton from "../OptionButtons/RadioButton";
import OptionsNicknameAddress from "../OptionButtons/OptionsNicknameAddress";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  houseNo: Yup.string()
    .required()
    .min(1)
    .label("Address should be different from rest of addresses and"),
  sector: Yup.string().required().min(1).label("Area,Colony,Sector,Street"),
  city: Yup.string().required().label("City"),
  radioButton: Yup.string().required().label("This"),
  optionNickName: Yup.string().required().label("This"),
});

function FormAddress({ addAddress }) {
  const [data, setData] = useState(["Mr.", "Mrs.", "Miss."]);
  const [checked, setChecked] = useState(-1);

  const [data2, setData2] = useState(["Home", "Office", "Others"]);
  const [checked2, setChecked2] = useState(-1);

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
            radioButton: "",
            optionNickName: "",
          }}
          onSubmit={(values, actions) => {
            addAddress(values);
            //TODO: (If REQUIRED) if your using different screens not modal.
            // actions.resetForm(); //this will reset the value
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
          }) => (
            <>
              <RadioButton
                data={data}
                checked={checked}
                setChecked={(item) => setChecked(item)}
                name="radioButton"
              />

              <AppTextInput
                placeholder="Name"
                autoCorrect={false}
                name="name"
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                value={values.name}
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
              />
              <ErrorMessage visible={touched.sector} error={errors.sector} />
              <AppTextInput
                placeholder="City"
                autoCorrect={false}
                name="city"
                onChangeText={handleChange("city")}
                onFocus={() => setFieldTouched("city")}
                value={values.city}
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
              <OptionsNicknameAddress
                data={data2}
                checked={checked2}
                setChecked={(item) => setChecked2(item)}
                name="optionNickName"
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
