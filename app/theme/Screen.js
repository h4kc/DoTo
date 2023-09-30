import React from "react";
import {STATUS_BAR_HEIGHT} from "./constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import colors from "./colors";

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
    justifyContent:"center",
    backgroundColor:colors.white,
    
  },
});

export default Screen;
