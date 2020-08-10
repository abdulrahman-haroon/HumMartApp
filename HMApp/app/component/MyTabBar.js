import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Animated from "react-native-reanimated";

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    // <View style={{ flexDirection: "row" }}>
    //   {state.routes.map((route, index) => {
    //     const { options } = descriptors[route.key];
    //     const label =
    //       options.tabBarLabel !== undefined
    //         ? options.tabBarLabel
    //         : options.title !== undefined
    //         ? options.title
    //         : route.name;

    //     const isFocused = state.index === index;

    //     const onPress = () => {
    //       const event = navigation.emit({
    //         type: "tabPress",
    //         target: route.key,
    //         canPreventDefault: true,
    //       });

    //       if (!isFocused && !event.defaultPrevented) {
    //         navigation.navigate(route.name);
    //       }
    //     };

    //     const onLongPress = () => {
    //       navigation.emit({
    //         type: "tabLongPress",
    //         target: route.key,
    //       });
    //     };

    //     const inputRange = state.routes.map((_, i) => i);
    //     const opacity = Animated.interpolate(position, {
    //       inputRange,
    //       outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
    //     });

    //     return (
    //       <TouchableOpacity
    //         accessibilityRole="button"
    //         accessibilityStates={isFocused ? ["selected"] : []}
    //         accessibilityLabel={options.tabBarAccessibilityLabel}
    //         testID={options.tabBarTestID}
    //         onPress={onPress}
    //         onLongPress={onLongPress}
    //         style={{
    //           flex: 1,
    //           borderWidth: 1,
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Animated.Text style={{ color: "black" }}>{label}</Animated.Text>
    //       </TouchableOpacity>
    //     );
    //   })}
    // </View>
    <View style={{ flexDirection: "row" }}>
      <Text>Hi</Text>
    </View>
  );
}
export default MyTabBar;
