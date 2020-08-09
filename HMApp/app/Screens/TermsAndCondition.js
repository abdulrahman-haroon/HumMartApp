import React from "react";
import { View, Text, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import fonts from "../styles/fonts";
import color from "../styles/color";

function TermsAndCondition({ navigation }) {
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
          Terms and Conditions
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
          Hummart Terms of Use {"\n"}
          {"\n"}1.1 Welcome. again. to Hummart.com. It is strongly recommended
          that you read and understand the "Terms of Use", as by accessing to
          this Website you're bound by the same and acknowledge that it
          constitutes as part of the procedure followed by Hummart. If you don't
          agree then, unfortunately, you won't be able to utilize our Website's
          services. {"\n"}
          {"\n"} 1.2 The following Terms of Use posted on Hummart.com is an
          agreement between us (Website) and you (Visitors) and by visiting our
          site you hereby are accepting and consenting to the clauses outlined
          in the Terms of Use. On time to time basis, we may modify the Terms of
          Use and your continued use of our Website signify that you are bound
          to approve of our modified Terms of Use. {"\n"}
          {"\n"}1.3 The Website reserves the right to terminate all the clauses
          of the Terms of Use without any prior notice. Following this
          termination. Hummart also holds the right to revoke the access to your
          account (User ID and password) which had been issued by our website
          and should not be able to use our Website from thereon. {"\n"}
          {"\n"} 1.4 To place an order, Users are required to provide accurate
          personal details and in case there are any changes to be made,
          re-register it at your earliest. {"\n"}
          {"\n"} 1.5 Hummart Users are warned not to provide fraudulent details
          or details of other person on the behalf of that person. In case of
          fake order or incorrect information. order will be revocated and the
          person would be held liable of penalty. {"\n"}
          {"\n"} 1.6 In case any unusual activity is noticed from a User's
          account, User will be held liable for it and immediately denied access
          to the account. If, however, you are not involved directly in the
          unusual activity via your account then you may inform us at
          customer@hummart.com or call us at 021-38658800. {"\n"}
          {"\n"} 1.7 If it comes to Hummart notice that user is under the 18
          years of age, the account will be deactivated automatically. It is
          advisable by Hummart to its Users not to share their account details
          with anyone under any conditions. {"\n"}
          {"\n"}1.8 Data collected through forms become property of Hummart and
          they hold the right to use it. The information submitted by the Users
          may be used to send promotional emails or in case of addition to the
          Hummart Website. {"\n"}
          {"\n"} 1.9 Hummart reserves the right to take action against anyone
          who intends to disparage or destroy Hummart's reputation or create
          confusion amongst its Users. {"\n"}
          {"\n"}
          2.0 Hummart holds the right to cancel your order in case a discrepancy
          is reported any time. You shall receive a confirmation call from
          Hummart's Customer Service department and you be asked to provide
          further information in case of ambiguity.{"\n"}
          {"\n"} 2.1 Hummart believes in provision of accurate details regarding
          the products available on Website. A times there might be
          inaccuracies, errors or mispricing in the prices mentioned. However,
          in case of mispriced of product or total amount of order, User may
          contact our Customer Service department and we will be please to help
          you out In case of unconfirmed order, Hummart reserves the right to
          cancel or refuse delivery at its sole discretion. {"\n"}
          {"\n"}2.2 Any changes in order or its related information would not be
          entertained at the end moment Users are advised to receive their order
          within the allotted time slot. {"\n"}
          {"\n"}2.3 For an instance, if you have placed an order and till the
          time of delivery the product runs out of stock; we will make you our
          priority and get back to you as soon as we restock the product again.
          If an untoward incident or an unforeseen situation occurs, there might
          be a delay in the processing of your order. That said, Hummart will
          not be held responsible and promises to try its best to resolve the
          situation at the earliest. We would be glad to hear from you. For
          queries and feedback, email us: customer@hummartcom
        </Text>
      </ScrollView>
      {/* {"\n"}{"\n"} */}
    </View>
  );
}

export default TermsAndCondition;
