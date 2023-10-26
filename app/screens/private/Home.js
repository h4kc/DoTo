import React from "react";
import Screen from "../../theme/Screen";
import AppTitle from "../../components/AppTitle";
import TopicCard from "../../components/TopicCard";
import AddButton from "../../components/AddButton";
import { FlatList, StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
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
  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <AppTitle text={"My Todo lists"} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TopicCard
              title={item.name}
              tasksCount={item.tasksCount}
              onPress={() => navigation.navigate("Todos")}
            />
          )}
          keyExtractor={(item) => item.name}
          style={{ flex: 1 }}
        />
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
