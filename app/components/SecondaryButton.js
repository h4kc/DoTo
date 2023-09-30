import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../theme/colors'

const SecondaryButton = ({color, text, onPress}) => {
  return (
    <TouchableOpacity style={{borderWidth:1, borderColor:colors[color], width:120, padding:5, borderRadius:10, justifyContent:"center", alignItems:"center"}} onPress={onPress}>
      <Text style={{color:colors[color]}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default SecondaryButton

