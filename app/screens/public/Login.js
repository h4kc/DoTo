import { StyleSheet, Image, View } from "react-native";
import React, { useContext } from "react";
import Translation from "../../translation/context";
import Screen from "../../theme/Screen";
import AppTitle from "../../components/AppTitle";
import MainButton from "../../components/MainButton";

const Login = () => {
  const { isRtl, t } = useContext(Translation);

  return (
    <Screen>
      <View style={styles.logoTitleContainer}>
        <Image
          source={require("../../assets/DoToLogo.png")}
          style={styles.stretch}
        />
        <AppTitle text={"DoTo"} />
      </View>
      <View style={styles.mainButtonContainer}>
        <MainButton title={"Continue with Google"} icon="google" />
        <MainButton title={"Continue with Apple"} icon="apple" />
      </View>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoTitleContainer: {
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 100,
  },
  mainButtonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
  },
});
