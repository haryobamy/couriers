import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Maps } from "../components";
import { COLORS, GOOGLE_API_KEY, icons, SIZES, FONTS } from "../constants";

const Address = ({ navigation }) => {
  function renderForm() {
    return (
      <View
        style={{
          position: "absolute",
          //   top: 200,
          bottom: 10,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <View
          style={{
            width: SIZES.width,
            paddingVertical: SIZES.padding * 4,
            paddingHorizontal: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            paddingTop: 40,
          }}
        >
          {/* house number */}
          <View>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Enter Floor and House Number
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding / 3,
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3,
              }}
              placeholder="23"
              placeholderTextColor={COLORS.gray}
              selectionColor={COLORS.gray}
            />
          </View>
          {/* house number */}
          <View
          // style={{
          //   marginTop: 2,
          // }}
          >
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Enter Postal / Zip Code
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding / 3,
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3,
              }}
              placeholder="M5E 1E6"
              placeholderTextColor={COLORS.gray}
              selectionColor={COLORS.gray}
            />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",

              marginTop: 20,
              marginBottom: -50,
              //   backgroundColor: COLORS.primary,
              //   width: 150,
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#6e59f3",
                width: 150,
                height: 40,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("Booking")}
            >
              <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                Confirm Location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <Maps />
      <View>{renderForm()}</View>
    </KeyboardAvoidingView>
  );
};

export default Address;
