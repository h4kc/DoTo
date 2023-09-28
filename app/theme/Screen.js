import React from "react";
import {STATUS_BAR_HEIGHT} from "./constants";
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
    flex: 1,
    paddingHorizontal:15
  },
});

export default Screen;
