// const Baby = [
//   {
//     id: 0,
//     title: "Toys",
//     image: require("../assets/SubCategories/baby/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Baby Food",
//     image: require("../assets/SubCategories/baby/2.jpg"),
//   },
//   {
//     id: 2,
//     title: "Baby Diapers & Wipes",
//     image: require("../assets/SubCategories/baby/3.jpg"),
//   },
//   {
//     id: 3,
//     title: "Baby Skin & Hair Care",
//     image: require("../assets/SubCategories/baby/4.jpg"),
//   },
//   {
//     id: 4,
//     title: "Baby Accessories & More",
//     image: require("../assets/SubCategories/baby/5.jpg"),
//   },
// ];
// const Pharmacy = [
//   {
//     id: 0,
//     title: "Contraceptives",
//     image: require("../assets/SubCategories/pharmacy/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Pain relievers",
//     image: require("../assets/SubCategories/pharmacy/2.jpg"),
//   },
//   {
//     id: 3,
//     title: "OTCs",
//     image: require("../assets/SubCategories/pharmacy/4.jpg"),
//   },
//   {
//     id: 4,
//     title: "Health Supplements",
//     image: require("../assets/SubCategories/pharmacy/5.jpg"),
//   },
//   {
//     id: 5,
//     title: "Hand & Foot Care",
//     image: require("../assets/SubCategories/pharmacy/6.jpg"),
//   },
// ];
// const Noodles = [
//   {
//     id: 0,
//     title: "Noodles",
//     image: require("../assets/SubCategories/noodles/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Canned & Frozen Food",
//     image: require("../assets/SubCategories/noodles/2.jpg"),
//   },
// ];
// const HouseHold = [
//   {
//     id: 0,
//     title: "Laundry Detergents",
//     image: require("../assets/SubCategories/household/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Dishwashers",
//     image: require("../assets/SubCategories/household/2.jpg"),
//   },
// ];
// const Breakfast = [
//   {
//     id: 0,
//     title: "Milk & Milk Products",
//     image: require("../assets/SubCategories/breakfast/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Breakfast Cereal & Mixes",
//     image: require("../assets/SubCategories/breakfast/2.jpg"),
//   },
// ];
// const Biscuits = [
//   {
//     id: 0,
//     title: "Biscuits & Cookies",
//     image: require("../assets/SubCategories/biscuits/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Namkeen & Snacks",
//     image: require("../assets/SubCategories/biscuits/2.jpg"),
//   },
// ];
// const Grocery = [
//   {
//     id: 0,
//     title: "Atta & Other Flours",
//     image: require("../assets/SubCategories/grocery/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Pulses",
//     image: require("../assets/SubCategories/grocery/2.jpg"),
//   },
// ];
// const Beverages = [
//   {
//     id: 0,
//     title: "Soft Drinks",
//     image: require("../assets/SubCategories/beverages/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Juices & Concentrates",
//     image: require("../assets/SubCategories/beverages/2.jpg"),
//   },
// ];
// const Home = [
//   {
//     id: 0,
//     title: "Bathroom Essentials",
//     image: require("../assets/SubCategories/homeAndKitchen/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Kitches Tools & Accessories",
//     image: require("../assets/SubCategories/homeAndKitchen/2.jpg"),
//   },
// ];
// const Furnishing = [
//   {
//     id: 0,
//     title: "Bathing Necessities",
//     image: require("../assets/SubCategories/furnishing/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Mats & Carpets",
//     image: require("../assets/SubCategories/furnishing/2.jpg"),
//   },
// ];
// const Pet = [
//   {
//     id: 0,
//     title: "Dog Supplies",
//     image: require("../assets/SubCategories/pet/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Cat Supplies",
//     image: require("../assets/SubCategories/pet/2.jpg"),
//   },
// ];

// const Offers = [
//   {
//     id: 0,
//     title: "Cartoons",
//     image: require("../assets/SubCategories/offers/1.jpg"),
//   },
//   {
//     id: 1,
//     title: "Bundle Deals",
//     image: require("../assets/SubCategories/offers/2.jpg"),
//   },
//   {
//     id: 2,
//     title: "Discounted Items",
//     image: require("../assets/SubCategories/offers/3.jpg"),
//   },
// ];
// const Other = [
//   {
//     id: 0,
//     title: "Smokers Corner",
//     image: require("../assets/SubCategories/Other/1.jpg"),
//   },
// ];
// const MeatQurbani = [
//   {
//     id: 0,
//     title: "Qurbani",
//     image: require("../assets/SubCategories/NotAvailablePic.jpg"),
//   },
// ];
{
  /* {index === 2 && (
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
        )} */
}

{
  /* {index === 4 && (
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
            {Furnishing.map((itemsT, key) => (
              <TouchableOpacity
                key={itemsT.id}
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
                  source={itemsT.image}
                />
                <Text
                  style={{
                    fontFamily: fonts.sst,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  {itemsT.title}
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
        {index === 14 && (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 10,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {MeatQurbani.map((items, key) => (
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
        )} */
}
