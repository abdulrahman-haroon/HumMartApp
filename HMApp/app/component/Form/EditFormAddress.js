import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import AppButton from "./AppButton";
import RadioButton from "../OptionButtons/RadioButton";
import OptionsNicknameAddress from "../OptionButtons/OptionsNicknameAddress";
import { set } from "react-native-reanimated";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(1)
    .max(255, "You have exceeded the limit of characters that is 255.")
    .label("Name"),
  email: Yup.string()
    .required()
    .email()
    .max(100, "You have exceeded the limit of characters that is 100.")
    .label("Email"),
  houseNo: Yup.string()
    .required()
    .min(1)
    .max(255, "You have exceeded the limit of characters that is 255.")
    .label("Address should be different from rest of addresses and"),
  sector: Yup.string()
    .required()
    .min(1)
    .max(180, "You have exceeded the limit of characters that is 180.")
    .label("Area,Colony,Sector,Street"),
  city: Yup.string()
    .required()
    .max(80, "You have exceeded the limit of characters that is 80.")
    .label("City"),
  radioButton: Yup.string().required().label("This"),
  optionNickName: Yup.string().required().label("This"),
});

function EditFormAddress({ allData, selectedKey, setVisibleEditModal }) {
  const [data, setData] = useState(["Mr.", "Mrs.", "Miss."]);
  const [checked, setChecked] = useState(-1);

  const [data2, setData2] = useState(["Home", "Office", "Others"]);
  const [checked2, setChecked2] = useState(-1);

  const setUpdate = (values, indexKey) => {
    return allData.map((item, key) => {
      if (key === indexKey) {
        item.name = values.name;
        item.email = values.email;
        item.houseNo = values.houseNo;
        item.sector = values.sector;
        item.city = values.city;
        item.radioButton = values.radioButton;
        item.optionNickName = values.optionNickName;
      }
    });
  };
  return (
    <View style={{ flex: 1 }}>
      {allData.map((item, key) =>
        key === selectedKey ? (
          <View key={key} style={{ marginHorizontal: 15 }}>
            <Formik
              initialValues={{
                name: item.name,
                email: item.email,
                houseNo: item.houseNo,
                sector: item.sector,
                city: item.city,
                radioButton: item.radioButton,
                optionNickName: item.optionNickName,
              }}
              onSubmit={(values) => {
                setUpdate(values, key);
                setVisibleEditModal(false);
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
                  {data.map((dataItems, key) => {
                    if (values["radioButton"] === dataItems) {
                      setChecked(key);
                    }
                  })}
                  {data2.map((dataItems, key) => {
                    if (values["optionNickName"] === dataItems) {
                      setChecked2(key);
                    }
                  })}
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
                    multiline
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
                    multiline
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
                  <ErrorMessage
                    visible={touched.houseNo}
                    error={errors.houseNo}
                  />
                  <AppTextInput
                    placeholder="Area,Colony,Sector,Street"
                    autoCorrect={false}
                    name="sector"
                    onChangeText={handleChange("sector")}
                    onBlur={() => setFieldTouched("sector")}
                    multiline
                    value={values.sector}
                  />
                  <ErrorMessage
                    visible={touched.sector}
                    error={errors.sector}
                  />
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

                  <AppButton title="UPDATE" onPress={handleSubmit} />
                </>
              )}
            </Formik>
          </View>
        ) : null
      )}
    </View>
  );
}

export default EditFormAddress;
