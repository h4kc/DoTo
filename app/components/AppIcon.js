import React from "react";
import colors from "../theme/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

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
