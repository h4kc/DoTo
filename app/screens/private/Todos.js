import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Screen from "../../theme/Screen";
import AppIcon from "../../components/AppIcon";
import AppTitle from "../../components/AppTitle";
import SecondaryButton from "../../components/SecondaryButton";
import CheckBoxItem from "../../components/CheckBoxItem";
import AddButton from "../../components/AddButton";

const Todos = ({ navigation }) => {
  const data = [
    {
      todo: "Call my boss",
      status: true,
      deleted: false,
    },
    {
      todo: "Print The Report",
      status: true,
      deleted: false,
    },
    {
      todo: "Prepare a presentation ",
      status: false,
      deleted: false,
    },
  ];
  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.backIconContainer}>
        <AppIcon
          name="chevron-left"
          size={40}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.topicAndButtonContainer}>
        <AppTitle text={"Work"} />
        <SecondaryButton
          text={"Delete Groupe"}
          color={"danger"}
          onPress={() => console.log("delete Groupe")}
        />
      </View>
      <View style={styles.todosContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CheckBoxItem
              title={item.todo}
              onDelete={() => console.log("Delete Todo")}
              isChecked={item.status}
            />
          )}
          keyExtractor={(item) => item.todo}
          style={{ flex: 1 }}
        />
      </View>
      <View style={styles.addButtonContainer}>
      <AddButton />
    </View>
    </Screen>
  );
};

export default Todos;

const styles = StyleSheet.create({
  backIconContainer: {
    marginBottom: 10,
    paddingVertical: 10,
  },
  topicAndButtonContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todosContainer: {
    flex: 1,
  },
  addButtonContainer:{
    
    alignItems:"flex-end",

    paddingRight:10,
    paddingBottom:10
  }
});
