import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../theme/colors";
import SecondaryButton from "../../components/SecondaryButton";
import { useForm } from "react-hook-form";
import FormTextInput from "../../components/FormTextInput";

const AddTopic = () => {
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
        color={"green"}
        text={"Save"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default AddTopic;

const styles = StyleSheet.create({
  addTopicContainer: {
    paddingHorizontal: 10,
    marginTop: 0,
    height: 120,
    backgroundColor: colors.white,
  },
});
