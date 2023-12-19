import React, { useContext, useEffect, useState } from "react";
import Screen from "../../theme/Screen";
import AppTitle from "../../components/AppTitle";
import TopicCard from "../../components/TopicCard";
import AddButton from "../../components/AddButton";

import AppIcon from "../../components/AppIcon";
import AuthContext from "../../auth/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";
import { FlatList, StyleSheet, View } from "react-native";
import { auth } from "../../../firbase";
import { getUserData } from "../../api/privateApi";
const Home = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [userData, setUserData] = useState()
  const getUserDataHome =async ()=>{
    console.log("Fetching topics start")
    const cats =   await getUserData(authContext.user.uid)
    if (cats) {
       setUserData(cats)
       console.log("Todos topics featched")
    }else{
      console.log("No todo topics")
    }
   
  }
  const onSignOut = async () => {
    console.log("User starting sign out");
    await AsyncStorage.removeItem("@doto-user");
    authContext.setUser(null);
    await signOut(auth);
  };
  const data = [
    {
      name: "Work",
      tasksCount: 10,
    },
    {
      name: "Morning",
      tasksCount: 20,
    },
    {
      name: "Night",
      tasksCount: 15,
    },
  ];
useEffect(() => {
  getUserDataHome()
}, [])
  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <AppTitle text={"My Todo lists"} />
        <AppIcon name={"sign-out-alt"} size={40} onPress={onSignOut} />
      </View>
      <View style={styles.listContainer}>
        {userData ? <FlatList
          data={userData.categories}
          renderItem={({ item }) => (
            <TopicCard
              title={item.categorieLabel}
              tasksCount={item.categorieTodos.length}
              onPress={() => navigation.navigate("Todos")}
            />
          )}
          keyExtractor={(item) => item.categorieLabel}
          style={{ flex: 1 }}
        /> : <AppTitle text={"Loading"}/>}
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton onPress={() => navigation.navigate("AddTopic")} />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    marginVertical: 10,
    flex: 1,
  },
  addButtonContainer: {
    alignItems: "flex-end",

    paddingRight: 10,
    paddingBottom: 10,
  },
});
