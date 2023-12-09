
import AppIcon from "./AppIcon";
import React from "react";
import AppTitle from "./AppTitle";
import { STATUS_BAR_HEIGHT } from "../theme/constants";
import { StyleSheet,View } from "react-native";
const Header = ({ title, onPreview }) => {
  return (
    <View style={styles.backIconContainer}>
      <AppIcon name="chevron-left" size={40} onPress={onPreview} />
      <AppTitle text={title} />
      <AppIcon name="chevron-left" size={40} color="white" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  backIconContainer: {
    marginBottom: 10,
    paddingTop: STATUS_BAR_HEIGHT + 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
