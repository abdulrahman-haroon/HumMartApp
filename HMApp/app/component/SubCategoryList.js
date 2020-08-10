import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import color from "../styles/color";
import fonts from "../styles/fonts";

const Mobiles = [
  {
    id: 0,
    title: "Mobiles",
    image: require("../assets/SubCategories/Mobile/mobile.jpg"),
  },
];
const Electornics = [
  {
    id: 0,
    title: "Mobiles Accessories",
    image: require("../assets/SubCategories/electronic/1.jpg"),
  },
  {
    id: 1,
    title: "Grooming Products",
    image: require("../assets/SubCategories/electronic/2.jpg"),
  },
  {
    id: 2,
    title: "Kitchen Appliances",
    image: require("../assets/SubCategories/electronic/3.jpg"),
  },
  {
    id: 3,
    title: "Irons and House Cleaners",
    image: require("../assets/SubCategories/electronic/4.jpg"),
  },
];
const Baby = [
  {
    id: 0,
    title: "Toys",
    image: require("../assets/SubCategories/baby/1.jpg"),
  },
  {
    id: 1,
    title: "Baby Food",
    image: require("../assets/SubCategories/baby/2.jpg"),
  },
  {
    id: 2,
    title: "Baby Diapers & Wipes",
    image: require("../assets/SubCategories/baby/3.jpg"),
  },
  {
    id: 3,
    title: "Baby Skin & Hair Care",
    image: require("../assets/SubCategories/baby/4.jpg"),
  },
  {
    id: 4,
    title: "Baby Accessories & More",
    image: require("../assets/SubCategories/baby/5.jpg"),
  },
];
const Personal = [
  {
    id: 0,
    title: "Makeup",
    image: require("../assets/SubCategories/NotAvailablePic.jpg"),
  },
  {
    id: 1,
    title: "Bath & Body",
    image: require("../assets/SubCategories/personalCare/1.jpg"),
  },
  {
    id: 2,
    title: "Hair Care",
    image: require("../assets/SubCategories/personalCare/2.jpg"),
  },
  {
    id: 3,
    title: "Skin Care",
    image: require("../assets/SubCategories/personalCare/3.jpg"),
  },
  {
    id: 4,
    title: "Oral Care",
    image: require("../assets/SubCategories/personalCare/4.jpg"),
  },
  {
    id: 5,
    title: "Face Care",
    image: require("../assets/SubCategories/personalCare/5.jpg"),
  },
  {
    id: 6,
    title: "Hygiene",
    image: require("../assets/SubCategories/personalCare/6.jpg"),
  },
  {
    id: 7,
    title: "Men Grooming",
    image: require("../assets/SubCategories/personalCare/7.jpg"),
  },
  {
    id: 8,
    title: "Does & Perfumes",
    image: require("../assets/SubCategories/personalCare/8.jpg"),
  },
  {
    id: 9,
    title: "Women Grooming",
    image: require("../assets/SubCategories/NotAvailablePic.jpg"),
  },
];
const Pharmacy = [
  {
    id: 0,
    title: "Contraceptives",
    image: require("../assets/SubCategories/pharmacy/1.jpg"),
  },
  {
    id: 1,
    title: "Pain relievers",
    image: require("../assets/SubCategories/pharmacy/2.jpg"),
  },
  {
    id: 2,
    title: "Antiseptics",
    image: require("../assets/SubCategories/pharmacy/3.jpg"),
  },
  {
    id: 3,
    title: "OTCs",
    image: require("../assets/SubCategories/pharmacy/4.jpg"),
  },
  {
    id: 4,
    title: "Health Supplements",
    image: require("../assets/SubCategories/pharmacy/5.jpg"),
  },
  {
    id: 5,
    title: "Hand & Foot Care",
    image: require("../assets/SubCategories/pharmacy/6.jpg"),
  },
  {
    id: 6,
    title: "Adult Diapers",
    image: require("../assets/SubCategories/pharmacy/7.jpg"),
  },
];
const Noodles = [
  {
    id: 0,
    title: "Noodles",
    image: require("../assets/SubCategories/noodles/1.jpg"),
  },
  {
    id: 1,
    title: "Canned & Frozen Food",
    image: require("../assets/SubCategories/noodles/2.jpg"),
  },
  {
    id: 2,
    title: "Baking & Dessert Items",
    image: require("../assets/SubCategories/noodles/3.jpg"),
  },
  {
    id: 3,
    title: "Custard & Jelly",
    image: require("../assets/SubCategories/noodles/4.jpg"),
  },
  {
    id: 5,
    title: "Sauces & Ketchups",
    image: require("../assets/SubCategories/noodles/5.jpg"),
  },
  {
    id: 6,
    title: "Pasta & Soups",
    image: require("../assets/SubCategories/noodles/6.jpg"),
  },
  {
    id: 7,
    title: "Ready Made Meals & Mixes",
    image: require("../assets/SubCategories/noodles/7.jpg"),
  },
  {
    id: 8,
    title: "Pickles & Chutneys",
    image: require("../assets/SubCategories/noodles/8.jpg"),
  },
];
const HouseHold = [
  {
    id: 0,
    title: "Laundry Detergents",
    image: require("../assets/SubCategories/household/1.jpg"),
  },
  {
    id: 1,
    title: "Dishwashers",
    image: require("../assets/SubCategories/household/2.jpg"),
  },
  {
    id: 2,
    title: "Cleaners",
    image: require("../assets/SubCategories/household/3.jpg"),
  },
  {
    id: 3,
    title: "Cleaning Tools & Brushes",
    image: require("../assets/SubCategories/household/4.jpg"),
  },
  {
    id: 5,
    title: "Repellents",
    image: require("../assets/SubCategories/household/5.jpg"),
  },
  {
    id: 6,
    title: "Home & Car Fresheners",
    image: require("../assets/SubCategories/household/6.jpg"),
  },
  {
    id: 7,
    title: "Tissues & Disposables",
    image: require("../assets/SubCategories/household/7.jpg"),
  },
  {
    id: 8,
    title: "Premium Home Care",
    image: require("../assets/SubCategories/NotAvailablePic.jpg"),
  },
  {
    id: 9,
    title: "Shoe Care",
    image: require("../assets/SubCategories/household/8.jpg"),
  },
];
const Breakfast = [
  {
    id: 0,
    title: "Milk & Milk Products",
    image: require("../assets/SubCategories/breakfast/1.jpg"),
  },
  {
    id: 1,
    title: "Breakfast Cereal & Mixes",
    image: require("../assets/SubCategories/breakfast/2.jpg"),
  },
  {
    id: 2,
    title: "Bread & Eggs",
    image: require("../assets/SubCategories/breakfast/3.jpg"),
  },
  {
    id: 3,
    title: "Yogurt",
    image: require("../assets/SubCategories/breakfast/4.jpg"),
  },
  {
    id: 4,
    title: "Butter & Cheese",
    image: require("../assets/SubCategories/breakfast/5.jpg"),
  },
  {
    id: 5,
    title: "Jam Jelly Honey & Spreads",
    image: require("../assets/SubCategories/breakfast/6.jpg"),
  },
];
const Biscuits = [
  {
    id: 0,
    title: "Biscuits & Cookies",
    image: require("../assets/SubCategories/biscuits/1.jpg"),
  },
  {
    id: 1,
    title: "Namkeen & Snacks",
    image: require("../assets/SubCategories/biscuits/2.jpg"),
  },
  {
    id: 2,
    title: "Chips & Crisps",
    image: require("../assets/SubCategories/biscuits/3.jpg"),
  },
  {
    id: 3,
    title: "Chocolates & Candies",
    image: require("../assets/SubCategories/biscuits/4.jpg"),
  },
];
const Grocery = [
  {
    id: 0,
    title: "Atta & Other Flours",
    image: require("../assets/SubCategories/grocery/1.jpg"),
  },
  {
    id: 1,
    title: "Pulses",
    image: require("../assets/SubCategories/grocery/2.jpg"),
  },
  {
    id: 2,
    title: "Rice & Other Grains",
    image: require("../assets/SubCategories/grocery/3.jpg"),
  },
  {
    id: 3,
    title: "Dry Fruits & Nuts",
    image: require("../assets/SubCategories/grocery/4.jpg"),
  },
  {
    id: 4,
    title: "Edible Oils",
    image: require("../assets/SubCategories/grocery/5.jpg"),
  },
  {
    id: 5,
    title: "Ghee & Banaspati",
    image: require("../assets/SubCategories/grocery/6.jpg"),
  },
  {
    id: 6,
    title: "Spices",
    image: require("../assets/SubCategories/grocery/7.jpg"),
  },
  {
    id: 7,
    title: "Salt & Sugar",
    image: require("../assets/SubCategories/grocery/8.jpg"),
  },
  {
    id: 8,
    title: "Vinegar & Dressings",
    image: require("../assets/SubCategories/grocery/9.jpg"),
  },
];
const Beverages = [
  {
    id: 0,
    title: "Soft Drinks",
    image: require("../assets/SubCategories/beverages/1.jpg"),
  },
  {
    id: 1,
    title: "Juices & Concentrates",
    image: require("../assets/SubCategories/beverages/2.jpg"),
  },
  {
    id: 2,
    title: "Tea & Coffee",
    image: require("../assets/SubCategories/beverages/3.jpg"),
  },
  {
    id: 3,
    title: "Health & Energy Drinks",
    image: require("../assets/SubCategories/beverages/4.jpg"),
  },
  {
    id: 4,
    title: "Water",
    image: require("../assets/SubCategories/beverages/5.jpg"),
  },
];
const Home = [
  {
    id: 0,
    title: "Bathroom Essentials",
    image: require("../assets/SubCategories/homeAndKitchen/1.jpg"),
  },
  {
    id: 1,
    title: "Kitches Tools & Accessories",
    image: require("../assets/SubCategories/homeAndKitchen/2.jpg"),
  },
];
const Furnishing = [
  {
    id: 0,
    title: "Bathing Necessities",
    image: require("../assets/SubCategories/furnishing/1.jpg"),
  },
  {
    id: 1,
    title: "Mats & Carpets",
    image: require("../assets/SubCategories/furnishing/2.jpg"),
  },
  {
    id: 2,
    title: "Electrical Goods & Accessories",
    image: require("../assets/SubCategories/furnishing/3.jpg"),
  },
  {
    id: 3,
    title: "Stationery & Magzines",
    image: require("../assets/SubCategories/furnishing/4.jpg"),
  },
];
const Pet = [
  {
    id: 0,
    title: "Dog Supplies",
    image: require("../assets/SubCategories/pet/1.jpg"),
  },
  {
    id: 1,
    title: "Cat Supplies",
    image: require("../assets/SubCategories/pet/2.jpg"),
  },
  {
    id: 2,
    title: "Fish Supplies",
    image: require("../assets/SubCategories/pet/3.jpg"),
  },
];
const Meat = [
  {
    id: 0,
    title: "Qurbani",
    image: require("../assets/SubCategories/NotAvailablePic.jpg"),
  },
];
const Offers = [
  {
    id: 0,
    title: "Cartoons",
    image: require("../assets/SubCategories/offers/1.jpg"),
  },
  {
    id: 1,
    title: "Bundle Deals",
    image: require("../assets/SubCategories/offers/2.jpg"),
  },
  {
    id: 2,
    title: "Discounted Items",
    image: require("../assets/SubCategories/offers/3.jpg"),
  },
];
const Other = [
  {
    id: 0,
    title: "Smokers Corner",
    image: require("../assets/SubCategories/Other/1.jpg"),
  },
];
function SubCategoryList({ index, navigation }) {
  return (
    <View style={styles.container}>
      {index === 0 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Mobiles.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 1 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Electornics.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 2 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Baby.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 3 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Personal.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 4 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Pharmacy.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 5 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Noodles.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 6 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {HouseHold.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 7 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Breakfast.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 8 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Biscuits.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 9 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Grocery.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 10 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Beverages.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 11 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Home.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 12 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Furnishing.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 13 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Pet.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 12 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Meat.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 15 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Offers.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {index === 16 && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {Other.map((items, key) => (
            <TouchableOpacity
              key={items.id}
              style={{
                width: 150,
                height: 150,

                justifyContent: "center",
                alignItems: "center",

                borderWidth: 0.8,
                borderColor: color.lightgray,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 70,
                  alignSelf: "center",
                }}
                source={items.image}
              />
              <Text
                style={{
                  fontFamily: fonts.sst,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {items.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    marginLeft: 20,
  },
});
export default SubCategoryList;
