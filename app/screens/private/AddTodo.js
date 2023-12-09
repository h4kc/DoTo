import React from "react";
import colors from "../../theme/colors";
import FormTextInput from "../../components/FormTextInput";
import SecondaryButton from "../../components/SecondaryButton";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";


const AddTodo = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.AddTodoContainer}>
      <Header
        title={"New Todo"}
        onPreview={() => navigation.navigate("Todos")}
      />

      <FormTextInput
        placeholder={"Todo Title"}
        name={"todo"}
        control={control}
        defaultValue={""}
      />
      <SecondaryButton
        bgcolor={"black"}
        txtcolor={"white"}
        text={"Save"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  AddTodoContainer: {
    paddingHorizontal: 10,
    marginTop: 0,
    height: 260,
    backgroundColor: colors.white,
  },
});
