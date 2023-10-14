import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import SecondaryButton from '../../components/SecondaryButton'
import { useForm } from 'react-hook-form'
import FormTextInput from '../../components/FormTextInput'

const EditTodo = () => {
  const {control, handleSubmit} = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <View style={styles.AddTodoContainer}>
      <FormTextInput placeholder={"Todo Title"} name={"todo"} control={control} defaultValue={''}/>
      <SecondaryButton color={"green"} text={"Save"} onPress={handleSubmit(onSubmit)}/>
    </View>
  )
}

export default EditTodo

const styles = StyleSheet.create({
    AddTodoContainer:{
        paddingHorizontal:10,
        marginTop:0,
        height:120,
        backgroundColor:colors.white
    }
})