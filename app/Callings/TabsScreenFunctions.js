import React from "react";
import TabsListItems from "../component/TabsListItems";

export const BundleDealsFunction = ({ navigation }) => {
  return <TabsListItems navigation={navigation} endPoint={"/bundleDeals"} />;
};
export const CartoonFunction = ({ navigation }) => {
  return <TabsListItems navigation={navigation} endPoint={"/CatronsTabData"} />;
};
export const DiscountedItemsFunction = ({ navigation }) => {
  return (
    <TabsListItems endPoint={"/discountedItems"} navigation={navigation} />
  );
};
export const AppleFunction = ({ navigation }) => {
  return <TabsListItems endPoint={"/applesData"} navigation={navigation} />;
};
export const HuaweiFunction = ({ navigation }) => {
  return <TabsListItems endPoint={"/huaweiData"} navigation={navigation} />;
};
export const ItelFunction = ({ navigation }) => {
  return <TabsListItems endPoint={"/itelData"} navigation={navigation} />;
};
export const MobileAccessoriesFunction = ({ navigation }) => {
  return (
    <TabsListItems endPoint={"/mobileAccessories"} navigation={navigation} />
  );
};
export const GroomingProductsFunction = ({ navigation }) => {
  return (
    <TabsListItems endPoint={"/groomingProducts"} navigation={navigation} />
  );
};
export const ShowerGelFunction = ({ navigation }) => {
  return <TabsListItems endPoint={"/showerGelData"} navigation={navigation} />;
};
export const SoapFunction = ({ navigation }) => {
  return <TabsListItems endPoint={"/soapData"} navigation={navigation} />;
};
export const HandwashFunction = ({ navigation }) => {
  return <TabsListItems endPoint={"/handwashData"} navigation={navigation} />;
};
export const ShampooFunction = ({ navigation }) => {
  return <TabsListItems endPoint={"/shampooData"} navigation={navigation} />;
};
export const ConditionerFunction = ({ navigation }) => {
  return (
    <TabsListItems endPoint={"/conditionerData"} navigation={navigation} />
  );
};
