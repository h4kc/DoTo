import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../theme/colors";


function AppTextInput({
  icon,
  width = "100%",
  indicator,
  isRtl,
  placeholder,
  ...otherProps
}) {
  return (
    <View style={[isRtl ? styles.containerRTL : styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholder={placeholder}
        
        style={
          isRtl
            ? ( styles.inputRTL)
            : ( styles.input)
        }
        {...otherProps}
      />
      {indicator && (
        <MaterialCommunityIcons
          name={indicator}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    width: "90%",
    padding: 10,
    marginVertical: 10,

  },
  containerRTL: {
    backgroundColor: colors.white,
    flexDirection: "row-reverse",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 5,
  },
  input: {
    flex: 1,
    fontSize: 25,
    fontFamily: "Inter_500Medium",
  },
  inputRTL: {
    marginRight: 10,
    flex: 1,
    fontSize: 25,
    textAlign: "right",
    fontFamily: "Inter_500Medium",
  },
});

export default AppTextInput;
