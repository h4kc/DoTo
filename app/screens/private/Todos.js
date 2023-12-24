import React, { useEffect,useContext,useState } from "react";
import Screen from "../../theme/Screen";
import AppIcon from "../../components/AppIcon";
import AppTitle from "../../components/AppTitle";
import CheckBoxItem from "../../components/CheckBoxItem";
import AddButton from "../../components/AddButton";
import { StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { getTodos } from "../../api/privateApi";
import AuthContext from "../../auth/context";
import colors from "../../theme/colors";
import AppText from "../../components/AppText";

const Todos = ({ route,navigation }) => {
  const authContext = useContext(AuthContext);
  const {label, id} = route.params
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const getTopicTodos = async ()=>{
    setLoading(true)
   console.log("Start Fetching Todos")
    const fetchedTodos = await getTodos(authContext.user.uid,id)
    if (fetchedTodos) {
      setTodos(fetchedTodos)
      console.log("Fetched Todos")
    }
    setLoading(false)
  }
  useEffect(() => {
    getTopicTodos()
  }, [])
  
  
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
        <AppTitle text={label} />
        <View style={styles.editDeleteButtonContainer}>
          <TouchableOpacity
            style={{ marginRight: 6 }}
            onPress={() => navigation.navigate("EditTopic")}
          >
            <FontAwesome5 name="edit" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="trash" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.todosContainer}>
      {!loading ? todos.length ?  <FlatList
          data={todos}
          renderItem={({ item }) => (
            <CheckBoxItem
              title={item.label}
              onDelete={() => console.log("Delete Todo")}
              onEdit={() => navigation.navigate("EditTodo")}
              isChecked={item.completedAt}
            />
          )}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
        /> :<AppText style={{paddingHorizontal:10}} text={"No Todos in this topic"}/> : <ActivityIndicator size="large" color={colors.black}/>}
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton onPress={() => navigation.navigate("AddTodo")} />
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
    alignItems:"center",

  },
  todosContainer: {
    flex: 1,
  },
  addButtonContainer: {
    alignItems: "flex-end",
    paddingRight: 10,
    paddingBottom: 10,
  },
  editDeleteButtonContainer: {
    flexDirection: "row",
  },
});
