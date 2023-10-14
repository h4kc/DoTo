import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ style, text }) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "black",
    borderColor: "black",
    fontFamily: "Inter_500Medium",
  },
});
