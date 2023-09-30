import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../theme/colors';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.addContainer} onPress={onPress}>
      <AntDesign name="plus" size={50}  color={colors.white} />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    addContainer:{
            width:60,
            height:60,
            borderRadius:"100%",
            backgroundColor:colors.black,
            justifyContent:"center",
            alignItems:"center"

    }
})