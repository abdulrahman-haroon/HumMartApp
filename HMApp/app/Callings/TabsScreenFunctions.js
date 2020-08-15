import React from 'react';
import TabsListItems from "../component/TabsListItems"
import {ApplesData,HuaweiData,ItelData,MobileAccessoriesData,GroomingProductsData,ShowerGelData,SoapData,HandwashData, ShampooData,ConditionerData,BundleDealsData,CartoonsTabData,DiscountedItemData} from './Data'

export const BundleDealsFunction=({navigation})=>{
    return(
    <TabsListItems products={BundleDealsData} navigation={navigation}/>);
}
export const CartoonFunction=({navigation})=>{
    return(
    <TabsListItems products={CartoonsTabData} navigation={navigation}/>);
}
export const DiscountedItemsFunction=({navigation})=>{
    return(
    <TabsListItems products={DiscountedItemData} navigation={navigation}/>);
}
export const AppleFunction=({navigation})=>{
    return(
    <TabsListItems products={ApplesData} navigation={navigation}/>);
}
export const HuaweiFunction=({navigation})=>{
    return(
    <TabsListItems products={HuaweiData} navigation={navigation}/>);
}
export const ItelFunction=({navigation})=>{
    return(
    <TabsListItems products={ItelData} navigation={navigation}/>);
}
export const MobileAccessoriesFunction=({navigation})=>{
    return(
    <TabsListItems products={MobileAccessoriesData} navigation={navigation}/>);
}
export const GroomingProductsFunction=({navigation})=>{
    return(
    <TabsListItems products={GroomingProductsData} navigation={navigation}/>);
}
export const ShowerGelFunction=({navigation})=>{
    return(
    <TabsListItems products={ShowerGelData} navigation={navigation}/>);
}
export const SoapFunction=({navigation})=>{
    return(
    <TabsListItems products={SoapData} navigation={navigation}/>);
}
export const HandwashFunction=({navigation})=>{
    return(
    <TabsListItems products={HandwashData} navigation={navigation}/>);
}
export const ShampooFunction=({navigation})=>{
    return(
    <TabsListItems products={ShampooData} navigation={navigation}/>);
}
export const ConditionerFunction=({navigation})=>{
    return(
    <TabsListItems products={ConditionerData} navigation={navigation}/>);
}
