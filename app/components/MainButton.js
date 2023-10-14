import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../theme/colors";

function MainButton({
  title,
  onPress,
  icon = "google",
  color = "white",
  colorIcon = "black",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <FontAwesome5 name={icon} size={24} color={colors[colorIcon]} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "80%",
    marginVertical: 10,
    borderColor: colors.black,
    borderWidth: 2,
    flexDirection: "row",
  },
  text: {
    color: colors.black,
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "bold",
  },
});

export default MainButton;
