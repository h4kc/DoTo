import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from "../theme/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import fonts from "../theme/fonts";

const CheckBoxItem = ({ onDelete, title, isChecked, onEdit }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
      }}
    >
      <BouncyCheckbox
        size={25}
        fillColor={colors.black}
        unfillColor={colors.white}
        text={title}
        iconStyle={{ borderColor: colors.black, borderRadius: 0 }}
        innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
        style={{ flex: 1 }}
        textStyle={{ fontFamily: fonts.bold, color: colors.black }}
        onPress={(isChecked) => {}}
        isChecked={isChecked}
      />
      <TouchableOpacity onPress={onEdit} style={{ marginRight: 6 }}>
        <FontAwesome5 name="edit" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <FontAwesome5 name="trash" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CheckBoxItem;
