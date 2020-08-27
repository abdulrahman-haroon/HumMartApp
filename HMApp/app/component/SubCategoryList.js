import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import client from "../api/client";

import color from "../styles/color";
import fonts from "../styles/fonts";

function SubCategoryList({ index, navigation, onPress }) {
  const { data: Mobiles, request: request1 } = client("/mobileSub");
  const { data: Electornics, request: request2 } = client("/electronicSub");
  const { data: Personal, request: request3 } = client("/personalSub");
  useEffect(() => {
    request1();
    request2();
    request3();
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
          {Mobiles.data !== undefined
            ? Mobiles.data.map((items, key) => (
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
                  onPress={() => navigation.navigate(items.screen)}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 70,
                      height: 70,
                      alignSelf: "center",
                    }}
                    source={{ uri: items.image }}
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
              ))
            : null}
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
          {Electornics.data !== undefined
            ? Electornics.data.map((items, key) => (
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
                  onPress={() => navigation.navigate(items.screen)}
                >
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      alignSelf: "center",
                    }}
                    source={{ uri: items.image }}
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
              ))
            : null}
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
          {Personal.data !== undefined
            ? Personal.data.map((items, key) => (
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
                  onPress={() => navigation.navigate(items.screen)}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 80,
                      height: 70,
                      alignSelf: "center",
                    }}
                    source={{ uri: items.image }}
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
              ))
            : null}
        </View>
      )}
    </TouchableOpacity>
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
