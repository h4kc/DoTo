import React from "react";
import colors from "./colors";
import { STATUS_BAR_HEIGHT } from "./constants";
import { StyleSheet, SafeAreaView, View } from "react-native";


function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: STATUS_BAR_HEIGHT,

    backgroundColor: colors.white,
    margin: 5,
  },
});

export default Screen;
