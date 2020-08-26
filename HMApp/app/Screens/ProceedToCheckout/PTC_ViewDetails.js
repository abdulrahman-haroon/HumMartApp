import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import HeaderNavigation from "../../component/HeaderNavigation";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import ListItemsDataDisplay from "../../component/Lists/ListItemsDataDisplay";

function PTC_ViewDetails({ navigation, route, savings = 0 }) {
  const data = route.params;

  return (
    <View style={styles.container}>
      <HeaderNavigation
        title="Order Detail"
        showIcons={false}
        navigation={navigation}
        drawer
      />
      <ScrollView>
        <View style={{ alignSelf: "center", marginVertical: 10 }}>
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontSize: 15,
              fontWeight: "bold",
              color: color.darkishLight,
            }}
          >
            Placed {data.date} {data.time}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
          }}
        >
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <Text
              style={{
                fontFamily: fonts.ssl,
                color: color.darkishLight,
                marginBottom: 10,
              }}
            >
              Delivery Charges
            </Text>
            <Text
              style={{
                fontFamily: fonts.ssl,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Schedule for {data.schedule}
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                borderTopColor: color.lightdarkGray,
                borderTopWidth: 0.8,
              }}
            >
              <MaterialCommunityIcons
                name="cash-multiple"
                size={24}
                color="black"
                style={{ marginVertical: 10, marginHorizontal: 10 }}
              />
              <Text
                style={{
                  marginVertical: 13,
                  marginHorizontal: 10,
                  color: color.darkishLight,
                  fontFamily: fonts.ssl,
                }}
              >
                Pay on Delivery
              </Text>
            </View>
            <Text
              style={{
                marginVertical: 13,
                marginHorizontal: 10,
                color: color.darkishLight,
                fontFamily: fonts.ssl,
              }}
            >
              You have to pay PKR {data.total} to delivery executive
            </Text>
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            marginVertical: 10,
            marginHorizontal: 10,
            fontFamily: fonts.ssl,
            fontSize: 15,
            fontWeight: "bold",
            color: color.darkishLight,
          }}
        >
          {data.cartItem.length} Items(s) Amount: (PKR {data.total})
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
          {data.cartItem.map((item, key) => (
            <View
              key={key}
              style={{
                flexDirection: "row",
                marginVertical: 10,
                borderBottomWidth: 0.8,
                borderBottomColor: color.lightdarkGray,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
              <View
                style={{
                  width: "70%",
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.ssl,
                    fontWeight: "bold",
                    marginVertical: 10,
                  }}
                >
                  {item.description}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.ssl,
                  }}
                >
                  {item.quantity}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <Text
          style={{
            alignSelf: "center",
            marginVertical: 10,
            marginHorizontal: 10,
            fontFamily: fonts.ssl,
            fontSize: 15,
            fontWeight: "bold",
            color: color.darkishLight,
            textTransform: "uppercase",
          }}
        >
          Payment Summary
        </Text>
        <View style={{ backgroundColor: "white" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                width: "65%",
              }}
            >
              <Text
                style={{
                  marginBottom: 10,
                  fontFamily: fonts.ssl,
                  fontWeight: "bold",
                }}
              >
                Sub total
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontFamily: fonts.ssl,
                  fontWeight: "bold",
                }}
              >
                Delivery Charges
              </Text>
            </View>
            <View
              style={{
                flex: 1,

                marginVertical: 10,
                marginHorizontal: 10,
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  color: color.darkishLight,
                  fontFamily: fonts.ssl,
                  marginBottom: 10,
                }}
              >
                PKR {data.subTotal}
              </Text>
              <Text style={{ fontFamily: fonts.ssl, fontWeight: "bold" }}>
                PKR 100
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              flexDirection: "row",
              borderTopWidth: 0.8,
              borderTopColor: color.lightdarkGray,
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              Total payment amount
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  fontWeight: "bold",
                  marginVertical: 10,
                }}
              >
                PKR {data.total}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              flexDirection: "row",
              borderTopWidth: 0.8,
              borderTopColor: color.lightdarkGray,
            }}
          >
            <Text
              style={{
                fontFamily: fonts.ssl,
                color: color.lightRed,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              Your total savings
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  color: color.lightRed,
                  fontWeight: "bold",
                  marginVertical: 10,
                }}
              >
                PKR {savings}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 10,

            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginHorizontal: 15,
              marginVertical: 20,
            }}
          >
            <EvilIcons
              name="location"
              size={50}
              color="black"
              style={{ marginRight: 15 }}
            />
            <View>
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Delivery Address
              </Text>
              <Text
                style={{
                  fontFamily: fonts.ssl,
                  marginTop: 5,
                  fontWeight: "bold",
                }}
              >
                {data.optionNickName}
              </Text>

              <Text style={{ fontFamily: fonts.ssl, marginTop: 5 }}>
                Name: {data.radioButton} {data.name}
              </Text>
              <Text style={{ fontFamily: fonts.ssl, marginTop: 5 }}>
                Email: {data.email}
              </Text>
              <Text style={{ fontFamily: fonts.ssl, marginTop: 5 }}>
                House No: {data.houseNo} , {data.sector}
              </Text>
              <Text style={{ fontFamily: fonts.ssl, marginTop: 5 }}>
                City: {data.city}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              marginVertical: 10,
              marginHorizontal: 10,
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              name="briefcase"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Text
              style={{
                fontFamily: fonts.ssl,
                fontSize: 15,
                marginTop: 3,
                marginBottom: 5,
              }}
            >
              Order ID: {data.orderNumber}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PTC_ViewDetails;
