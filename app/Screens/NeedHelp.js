import React from "react";
import { View, Text, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import fonts from "../styles/fonts";
import color from "../styles/color";

function NeedHelp({ navigation }) {
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
          Need Help?
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
          General {"\n"}
          {"\n"}What is HumMart? {"\n"}
          {"\n"}HumMart is an online shopping platform offering you the
          hassle-free shopping experience to shop the grocery products with
          convenience. A faster and safer shopping experience is just a few
          clicks away.{"\n"}
          {"\n"}What is the product range?{"\n"}
          {"\n"} HumMart offers a variety of products to you ranging from
          grocery &amp; staple food to fruits &amp: vegetables, dairy products
          to beverages, personal cam products to baby care products, household
          need products to pet products and much more.{"\n"}
          {"\n"}
          What are the areas where products are delivered by HumMart? {"\n"}
          {"\n"}
          HumMart delivers products all over Karachi.{"\n"}
          {"\n"}
          The product I require is not found, what to do? The search bar of the
          website allows you to search for the desired product, you may also
          chat online with our customer support representatives available to
          facilitate you. You may also suggest us a product you want.{"\n"}
          {"\n"} Are the prices on HumMart negotiable? {"\n"}
          {"\n"}The prices charged for the product are set to give the best
          value to you, so negotiation is price deems to be unnecessary.{"\n"}
          {"\n"}
          Payments {"\n"}
          {"\n"}How to pay HumMart? {"\n"}
          {"\n"}To pay HumMart, you can avail the following modes of payment:
          {"\n"}
          {"\n"} • Cash on Delivery{"\n"}
          {"\n"} • Credit / Debit cards (coming soon) {"\n"}
          {"\n"}• Easy Paisa (coming soon){"\n"}
          {"\n"} What is Cash on delivery? {"\n"}
          {"\n"}Cash on delivery (COD) is a mode of payment that allows a
          customer you to pay directly through cash once order is delivered.{" "}
          {"\n"}
          {"\n"}Can I review my order receipt?{"\n"}
          {"\n"}
          Our delivery agent contains your order receipt at the time of
          delivery. Moreover. you can view your transaction history in "My
          Orders" tab.{"\n"}
          {"\n"} Do I need to pre-pay for my product when the order is placed?
          {"\n"}
          {"\n"}
          Pre-payment for order placement is100% safe and easy. However, HumMart
          also offers you the possibility to pay through Cash on Delivery (CoD).
          With CoD, you can pay in cash to our delivery agent upon receipt of
          your order.{"\n"}
          {"\n"} How do I pay using a Credit / Debit card? {"\n"}
          {"\n"}You can pay for your order on HumMart with any of Visa and
          MasterCard Credit / Debit cards.{"\n"}
          {"\n"} Can I use any Credit card for payment?{"\n"}
          {"\n"} Any of the Visa and MasterCard credit cards con be used as a
          mode of payment.{"\n"}
          {"\n"} Can I use any Debit Card for payment?{"\n"}
          {"\n"} Any of the Visa and MasterCard debit cards can be used as a
          mode of payment. {"\n"}
          {"\n"}Is the Credit / Debit card mode of payment safe? {"\n"}
          {"\n"}By adopting all the necessary security protocols, we at HumMart
          wants your shopping experience to be safer with us and payment through
          credit / debit cord is safeguarded in the best manner. {"\n"}
          {"\n"}Is there any amount limit for option of Cash on Delivery
          payment?{"\n"}
          {"\n"} As you order, there is no amount limit to order through cash on
          delivery option.{"\n"}
          {"\n"} I want to order products in large quantity as a corporate
          order, what to do? {"\n"}
          {"\n"}You can write us at customer@hummart.com for corporate orders.
          {"\n"}
          {"\n"}
          Refund &amp; Returns {"\n"}
          {"\n"}What should I do if an item that is delivered is defective
          (Broken, leaking or expired)? {"\n"}
          {"\n"}Contact HumMart at our helpline. through call or even chat
          online with our customer support representatives available to
          facilitate you.
          {"\n"}
          {"\n"}
          Cancellation {"\n"}
          {"\n"}How can I cancel my order?{"\n"}
          {"\n"} You can call us to cancel your order provided that the order in
          not dispatched. {"\n"}
          {"\n"}What if I have any complaint regarding my order?{"\n"}
          {"\n"} You can contact us through call or having a chat with our
          online customer support representatives. {"\n"}
          {"\n"}Order placement{"\n"}
          {"\n"} Do I need an account to shop with HurnMart? {"\n"}
          {"\n"}It is not necessary to have an account to shop with HumMart, yet
          as you shop with HumMart having a registered account, it will give you
          a faster, safer and convenient shopping experience.{"\n"}
          {"\n"} I want to track my order, is that possible? {"\n"}
          {"\n"}Yes, you can track the status of your order under My Orders
          section.{"\n"}
          {"\n"} How quickly can I get my order? {"\n"}
          {"\n"}You will be getting your order delivered on next working day.
          {"\n"}
          {"\n"}
          What if I want to reschedule my order?{"\n"}
          {"\n"} Yes, you can do this by clicking on the Need Help option in "My
          Orders" section. You can also reschedule your order as per your
          convenience on the basis of slots available.{"\n"}
          {"\n"} How will I know if an item in my order is unavailable?{"\n"}
          {"\n"} In case a product is unavailable after the order is placed, you
          will be informed via call and afterwards, you may order an alternative
          product or may cancel the order (if any refund will be applicable, it
          will also be initiated within 24 hours). {"\n"}
          {"\n"}Why am I having trouble placing products in the cart?{"\n"}
          {"\n"} If you are having trouble placing products in your cart, please
          make sure that you have made all relevant selections. If you still
          have problems, this may also mean that the item you are trying to buy
          is sold out Please get in touch with our Customer Support Team for
          further help in this regard.{"\n"}
          {"\n"} What should I do if I don't get the invoice for my order?{"\n"}
          {"\n"}
          Our delivery agent will be providing you the invoice of your order, if
          in case you don't get the invoice, you can check it from the Order
          section of your HumMart account.{"\n"}
          {"\n"} My payment was processed successfully but I didn't get any
          order confirmation.{"\n"}
          {"\n"} What should I do? I have not received my OTP code, what to do?{" "}
          {"\n"}
          {"\n"}• Please ensure that you have provided the correct mobile
          number. {"\n"}
          {"\n"}• Make sure that you enter only your 9 digit mobile number
          without any prefix i.e., +92 or 92 or + or 03. {"\n"}
          {"\n"}• Check that your mobile phone is in the network coverage area.{" "}
          {"\n"}
          {"\n"}• Poor network can result in delay of OTP getting delivered to
          your phone. {"\n"}
          {"\n"}• If you still don't receive the OTP, please contact your
          service provider. {"\n"}
          {"\n"}• In-case, you have an alternate phone number, you can try
          posting with the same. {"\n"}
          {"\n"}How can I trust that the groceries that will be delivered are
          quality checked and fresh?{"\n"}
          {"\n"} The groceries delivered are taken from the top brands having a
          signature of providing quality products and we at HumMart also ensures
          the quality and packaging of products before delivering it so that you
          can get the best produced and finely packaged groceries. {"\n"}
          {"\n"}Delivery {"\n"}
          {"\n"}What are the days and timings for delivery?{"\n"}
          {"\n"} There are 2 slots of delivery. The orders will be delivered
          throughout the weekend except on public holidays. {"\n"}
          {"\n"}There are 2 slots for order delivery: {"\n"}
          {"\n"}First slot 10 AM - 2 PM{"\n"}
          {"\n"}
          Second slot 4Pm - 8PM {"\n"}
          {"\n"}What are the delivery charges? {"\n"}
          {"\n"}For the order amounting below Rs.1000, the delivery charges are
          Rs.100: whereas, order that amounts more than Rs.1000 will be
          delivered FREE. {"\n"}
          {"\n"}What about other hidden costs (sales taxes etc)? {"\n"}
          {"\n"}There are no hidden costs in the prices charged. {"\n"}
          {"\n"}What happens if you're late?{"\n"}
          {"\n"}
          We value your time and a best shopping experience with HumMart. so we
          will be delivering orders timely. The exemption is with the
          unavoidable and sudden circumstances like traffic congestion or in
          transit tragedies that may abstain us to be on time, in case we will
          be late, you will be informed beforehand.{"\n"}
          {"\n"} What happens if I'm not available when you deliver?{"\n"}
          {"\n"} We will deliver the products to provided location and in case
          of your unavailability, it may be handed over to any associated person
          within your reach to provide you your order and keeping record (name,
          signature, relation etc) of that person with us. Moreover, we may also
          reschedule the delivery if you were unavailable at the time of your
          order delivery.{"\n"}
          {"\n"} Can I change the delivery address of my order?{"\n"}
          {"\n"} Yes, you can change the delivery address of your order. {"\n"}
          {"\n"}Can I change my delivery slot?{"\n"}
          {"\n"} Yes, it can be changed provided the order is not already
          dispatched. {"\n"}
          {"\n"}Who will deliver my order? {"\n"}
          {"\n"}Our delivery agent will be delivering you your order. {"\n"}
          {"\n"}How will my order be delivered?{"\n"}
          {"\n"} Our fleet of vans is maintained to deliver orders.{"\n"}
          {"\n"} I missed my delivery.{"\n"}
          {"\n"} What happens now? {"\n"}
          {"\n"}We will reschedule the delivery after contacting you. {"\n"}
          {"\n"}Will somebody contact me before delivering the package to my
          location? {"\n"}
          {"\n"}No, the order will be delivered to you without contacting you,
          yet you can track your order and its delivery. There are 2 slots for
          order delivery: First slot:10 AM - 2 PM Second slot: 4Pm - 8PM{"\n"}
          {"\n"}
          Shopping {"\n"}
          {"\n"}How are items packaged? {"\n"}
          {"\n"}The orders are packed in bags and then these bags are placed in
          a bin before dispatching the order. {"\n"}
          {"\n"}HumMart Account{"\n"}
          {"\n"}
          Can I sign up for HumMart account? {"\n"}
          {"\n"}Yes, you surely can sign up for HumMart account.{"\n"}
          {"\n"} Do I need to make an order for creating an account?{"\n"}
          {"\n"}
          It is not necessary that you need to order while you create an
          account. {"\n"}
          {"\n"}Are there any additional terms and conditions for registration?{" "}
          {"\n"}
          {"\n"}There are no additional terms and conditions for registering
          with HumMart.{"\n"}
          {"\n"} Do I need to submit any private information while registering?
          {"\n"}
          {"\n"} You can register by submitting just your contact number. My
          data will be saved by HumMart?{"\n"}
          {"\n"} Yes, your data will be saved by HumMart with utmost
          confidentiality to improve the shopping experience.{"\n"}
          {"\n"} Why should I signup on HumMart? {"\n"}
          {"\n"}By signing up on HumMart, you can track record of all the orders
          you place as well as saving yourself to provide personal information
          repeatedly thus giving a faster and safer experience to shop with
          HumMart.{"\n"}
          {"\n"} Once signed up, how should I login?{"\n"}
          {"\n"} You should log in through "SIGN IN" tab on the top right corner
          of the website.{"\n"}
          {"\n"}
        </Text>
      </ScrollView>
      {/* {"\n"}{"\n"} */}
    </View>
  );
}

export default NeedHelp;
