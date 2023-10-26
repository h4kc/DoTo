import React from "react";
import { StyleSheet, Text } from "react-native";
import fonts from "../theme/fonts";

function AppTitle({ style, text }) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

export default AppTitle;

const styles = StyleSheet.create({
  text: {
    color: "black",
    borderColor: "black",
    fontFamily: fonts.bolder,
    fontSize: 30,
  },
});
