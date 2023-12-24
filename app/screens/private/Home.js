import React, { useContext, useEffect, useState } from "react";
import Screen from "../../theme/Screen";
import AppTitle from "../../components/AppTitle";
import TopicCard from "../../components/TopicCard";
import AddButton from "../../components/AddButton";

import AppIcon from "../../components/AppIcon";
import AuthContext from "../../auth/context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { auth } from "../../../firbase";

import { getUserDataNew } from "../../api/privateApi";
import colors from "../../theme/colors";
const Home = ({ navigation }) => {
  //if the add function is not triggred in add screen don't fetch
  const authContext = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const getUserDataHome = async () => {
    console.log("NoRefresh");

    console.log("Fetching topics start");
    setLoading(true);
    try {
      const cats = await getUserDataNew(authContext.user.uid);
      if (cats) {
        setUserData(cats);
        console.log("Todos topics featched");
      } else {
        console.log("No todo topics");
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
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
    const unsubscribe = navigation.addListener("focus", () => {
      getUserDataHome();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <AppTitle text={"My Todo lists"} />
        <AppIcon name={"sign-out-alt"} size={40} onPress={onSignOut} />
      </View>
      <View style={styles.listContainer}>
        {!loading ? (
          userData.length ? (
            <FlatList
              data={userData}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TopicCard
                  title={item.label}
                  tasksCount={item.completedTodos + "/" + item.totalTodos}
                  onPress={() => navigation.navigate("Todos",item)}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <AppTitle text={error} />
          )
        ) : (
          <View>
            <ActivityIndicator size="large" color={colors.black} />
          </View>
        )}
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
    flexGrow: 1,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
