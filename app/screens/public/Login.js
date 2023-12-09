import React, { useState } from "react";
import Translation from "../../translation/context";
import Screen from "../../theme/Screen";
import AppTitle from "../../components/AppTitle";
import MainButton from "../../components/MainButton";
import { StyleSheet, Image, View,ActivityIndicator } from "react-native";
import colors from "../../theme/colors";
const Login = ({onGooglePress}) => {
const [loading, setLoading] = useState(false)  
const onGooglePressButton = ()=>{
  setLoading(true)
  onGooglePress()
}  
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
        <MainButton title={"Continue with Google"} icon="google" onPress={onGooglePressButton}/>
        <MainButton title={"Continue with Apple"} icon="apple" />
      </View>
      {loading && <View>
      <ActivityIndicator size="large" color={colors.black}/>
      </View>}
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
