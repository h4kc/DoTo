import { StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../theme/colors";

const AddButton = ({ onPress, icon="plus", size=50 , iconColor="white",backColor="black"}) => {
  return (
    <TouchableOpacity style={{...styles.addContainer, backgroundColor:colors[backColor]}} onPress={onPress}>
      <AntDesign name={icon} size={size} color={colors[iconColor]} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addContainer: {
    width: 60,
    height: 60,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
