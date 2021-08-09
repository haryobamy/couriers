import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacityComponent,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";
import { Home, Booking, Address } from "./screens";
import { SIZES, FONTS, COLORS, icons } from "./constants";
import { NativeBaseProvider, Box } from "native-base";

import Tabs from "./navigation/tabs";
// import Address from "./screens/Address";

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();
const App = () => {
  // const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: 120,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  paddingHorizontal: SIZES.padding,
                }}
                onPress={() => console.log("fix this")}
              >
                <Image
                  source={icons.back}
                  resizeMode="cover"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                  }}
                />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "300",
              fontSize: 24,
              marginHorizontal: SIZES.radius,
            },
          }}
          initialRoutName={"Booking"}
        >
          <Stack.Screen
            name="Booking"
            options={{ title: "Booking New Shippment" }}
            component={Booking}
          />
          {/* <Stack.Screen
          name="Home"
          options={{ title: "My Home" }}
          component={Home}
        /> */}
          <Stack.Screen
            name="Address"
            options={{ title: "To Address" }}
            component={Address}
          />

          {/* Tabs */}
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
