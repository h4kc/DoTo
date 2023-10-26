import React from "react";
import colors from "../../theme/colors";
import FormTextInput from "../../components/FormTextInput";
import SecondaryButton from "../../components/SecondaryButton";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";

const EditTopic = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.addTopicContainer}>
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
    height: 120,
    backgroundColor: colors.white,
  },
});
