import React from "react";
import { View, Text, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import fonts from "../styles/fonts";
import color from "../styles/color";

function PrivacyPolicy({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          backgroundColor: color.navigationColor,
          alignItems: "center",
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="white"
          style={{ marginLeft: 20, width: 30 }}
          onPress={() => navigation.goBack("Home")}
        />
        <Text
          style={{
            fontFamily: fonts.ssl,
            color: "white",
            paddingBottom: 5,
            fontSize: 15,
          }}
        >
          Privacy Policy
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: fonts.ssl,
            textAlign: "justify",
            marginVertical: 10,
            marginHorizontal: 13,
          }}
        >
          At HumMart, we understand your concern about your personal
          information, we care about it too. As such, we ensure we safeguard the
          information provided and honor your requests for confidentiality when
          you log in to www. Hummart.com Website and mobile app.
          {"\n"}
          {"\n"}1.1 This private policy governs your privacy rights regarding
          our collection, storage and accumulation of your personally
          identifiable information (name, contact number, mailing and postal
          address) concerning your use of our website. This information is
          stored in an electronic database. which is for HumMart's website use
          only. This privacy policy applies to the Site and services provided by
          HumMart.
          {"\n"}
          {"\n"}1.2 We shall therefore only use your name and other information
          which relates to you in the manner set out in this Privacy Policy. We
          will only collect information where it is necessary for us to do so
          and we will only collect information if it is relevant to our dealings
          with you.
          {"\n"}
          {"\n"} 1.3 You can visit the Website and browse without having to
          provide personal details. During your visit to the Hummart.com you
          remain anonymous and at no time can we identify you unless you have an
          account on the Website and log in with your username and password.
          {"\n"}
          {"\n"}1.4 We may collect your personal identification details if you
          seek to place an order through our Website.
          {"\n"}
          {"\n"}1.5 Whenever you interact on our site, we receive and store
          certain information in the form of 'cookies' which is basically done
          to enhance user experience. Cookies are basically placed on your hard
          drive and not on our site for record-keeping purposes.
          {"\n"}
          {"\n"}1.6 This Privacy Policy. which forms part of our Terms of Use.
          we will generally only collect your personal information from you or
          from someone you've authorized to provide it to us. We will also only
          collect information by lawful and fair means and not in an
          unreasonably intrusive behavior.
          {"\n"}
          {"\n"}1.7 We collect, store and process your data for processing your
          purchase on our Website and any possible later claims, and to provide
          you with our discounted promotions and future offers.
          {"\n"}
          {"\n"}1.8 We need this information to grant you a "go ahead" signal
          with placing your order for a product(s).We may use that data to
          process payment for the product and delivery of the product to you.
          {"\n"}
          {"\n"}1.9 We may pass on your basic information (name. contact number
          and postal address) on to a third party in order to make delivery of
          the product to you (for an example to courier service provider or
          delivery supp(ier).
          {"\n"}
          {"\n"}
          1.10 We seek to use information from correspondence which hereby means
          that you will provide certain essential information if you contact us
          by email or use any of the webforms on the Website.
          {"\n"}
          {"\n"} 1.11 We may also use your data in order to collect payment from
          you or in case we have any query regarding the order placed by Users
          (each, a User).
          {"\n"}
          {"\n"} 1.12 It is necessary for the Users to know how we use the
          collected information; i. To improve our site (the feedback collected
          from the Users to improve the quality of service provided by HumMart.
          ii. To send you periodic emails regarding offers and promotions on our
          Website. iii. To improve communication barrier between User (you) and
          Service Provider (Us).
          {"\n"}
          {"\n"} 1.13 We, at HumMart, ensure that access to customer information
          is limited to employees or until otherwise necessary. All employees
          are strictly committed to follow Privacy Policy which in turn implies
          that we aim to serve you better.
          {"\n"}
          {"\n"} 1.14 Under no circumstances do we rent, trade or sell out your
          information that we have collected with any other company for their
          marketing purposes without your consent.
          {"\n"}
          {"\n"} 1.15 We make reasonable efforts to ensure that your personal
          information is protected while you are on our Website. We have
          security procedures in the storage and disclosure or destruction of
          personal information, which are devised to protect unauthorized
          access. It's the kind of protection we would want of our data, if we
          were surfing another site on Web.
          {"\n"}
          {"\n"} 1.16 HumMart website links to other social media platforms that
          may collect personal information. however. HumMart shall not be held
          responsible for the loss of your data.
          {"\n"}
          {"\n"} 1.17 We are always improving and updating our Website to
          further enhance shopping on our Website. As a result, our policies
          would be evolving with time. As we update our Website and add new
          services, we will update our Privacy Policy accordingly.
          {"\n"}
          {"\n"} 1.18 To use our Website. you ore consenting to our Privacy
          Policy. We appreciate your trust in us and we promise to protect data.
          Feel free to contact our customer service team to help you out! Shoot
          us an email at customer@hummart.com or contact us on (021)111116 278.
        </Text>
      </ScrollView>
      {/* {"\n"}{"\n"} */}
    </View>
  );
}

export default PrivacyPolicy;
