import React from "react";
import colors from "../../theme/colors";
import FormTextInput from "../../components/FormTextInput";
import SecondaryButton from "../../components/SecondaryButton";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

const EditTopic = ({navigation}) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.addTopicContainer}>
            <Header title={"Edit Topic"} onPreview={()=>navigation.navigate("Todos")}/>

      <FormTextInput
        placeholder={"Topic Title"}
        name={"topic"}
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

export default EditTopic;

const styles = StyleSheet.create({
  addTopicContainer: {
    paddingHorizontal: 10,
    marginTop: 0,
    height: 260,
    backgroundColor: colors.white,
  },
});
