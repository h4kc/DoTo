import React from "react";
import colors from "../theme/colors";
import { Text, TouchableOpacity } from "react-native";

const SecondaryButton = ({ bgcolor, txtcolor, text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: colors[bgcolor],
        backgroundColor: colors[bgcolor],
        width: 120,
        padding: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: colors[txtcolor] }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
