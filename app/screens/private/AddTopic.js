import React,  { useContext } from "react";
import colors from "../../theme/colors";
import FormTextInput from "../../components/FormTextInput";
import SecondaryButton from "../../components/SecondaryButton";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { addTopic } from "../../api/privateApi";
import AuthContext from "../../auth/context";


const AddTopic = ({navigation}) => {
  const authContext = useContext(AuthContext);

  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) =>await addTopic(authContext.user.uid,{idTopic:data.topic+"_"+Date.now().toString(),categoryLabel:data.topic, categoryTodos:[]});
  return (
    <View style={styles.addTopicContainer}>
      <Header title={"New Topic"} onPreview={()=>navigation.navigate("Home")}/>
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

export default AddTopic;

const styles = StyleSheet.create({
  addTopicContainer: {
    paddingHorizontal: 10,
    marginTop: 0,
    height: 260,
    backgroundColor: colors.white,
  },
});
