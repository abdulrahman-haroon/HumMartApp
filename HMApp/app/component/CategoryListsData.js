import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "./ListItem";
import SubCategoryList from "./SubCategoryList";
const dropDownContainers = [
  {
    containerId: 1,
    title: "Mobile & Laptops",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory1.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 2,
    title: "Electornic Accessories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory2.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 3,
    title: "Baby Kids & Toys",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory3.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 4,
    title: "Personal Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory4.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 5,
    title: "Pharmacy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory5.jpeg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 6,
    title: "Noodles Sauces & Frozen Food",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory6.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 7,
    title: "Household Need",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory7.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 8,
    title: "Breakfast & Dairy",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory8.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 9,
    title: "Biscuits Snacks & Chocolates",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory9.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 10,
    title: "Grocery & Staples",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory10.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 11,
    title: "Beverages",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory11.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 12,
    title: "Home & Kitchen",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory12.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 13,
    title: "Furnishing & Home Needs",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory13.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 14,
    title: "Pet Care",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory14.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 15,
    title: "Meat & Seafood",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory15.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 16,
    title: "Offers",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory16.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
  {
    containerId: 17,
    title: "Other Categories",
    subtitle: "Subtitle",
    image: require("../assets/Categories/catagory17.jpg"),
    subCategories: [
      {
        subCategoryTitle: "Mobile",
        imageCat: require("../assets/SubCategories/mobile.jpg"),
      },
    ],
  },
];
function CategoryListsData(props) {
  return (
    <FlatList
      data={dropDownContainers}
      keyExtractor={(dropDownContainer) =>
        dropDownContainer.containerId.toString()
      }
      renderItem={({ item }) => (
        <View>
          <ListItem
            title={item.title}
            subTitle={item.subtitle}
            image={item.image}
          />
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({});
export default CategoryListsData;
