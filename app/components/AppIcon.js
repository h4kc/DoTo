import { TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../theme/colors";
const AppIcon = ({ onPress, name, color, size = 50 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: size, justifyContent: "center", alignItems: "center" }}
    >
      <FontAwesome5 name={name} size={size} color={colors[color]} />
    </TouchableOpacity>
  );
};

export default AppIcon;
