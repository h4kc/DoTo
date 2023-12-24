import React,  { useContext, useState } from "react";
import colors from "../../theme/colors";
import FormTextInput from "../../components/FormTextInput";
import SecondaryButton from "../../components/SecondaryButton";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { addTopic, addTopicNew,addTodo } from "../../api/privateApi";
import AuthContext from "../../auth/context";



const AddTopic = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false)
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) =>{
    setLoading(true)
    await addTopicNew(authContext.user.uid,{topicLabel:data.topic,completedTodos:0,totalTodos:0 },data.topic+"_"+Date.now().toString())
    setLoading(false)
    navigation.navigate("Home")
  };
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
