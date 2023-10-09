import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import AppTextInput from '../../components/AppTextInput'
import SecondaryButton from '../../components/SecondaryButton'

const AddTopic = () => {
  return (
    <View style={styles.addTopicContainer}>
      <AppTextInput placeholder={"Topic Title"}/>
      <SecondaryButton color={"green"} text={"Save"}/>
    </View>
  )
}

export default AddTopic

const styles = StyleSheet.create({
    addTopicContainer:{
        paddingHorizontal:10,
        marginTop:0,
        height:120,
        backgroundColor:colors.white
    }
})