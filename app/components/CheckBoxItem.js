import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '../theme/colors';
import { FontAwesome5 } from '@expo/vector-icons';
const CheckBoxItem = ({onDelete, title,isChecked}) => {
  return (
    <View style={{flexDirection:"row",alignItems:"center", paddingHorizontal:10, paddingVertical:5, marginTop:10}}>
            <BouncyCheckbox
                size={25}
                fillColor={colors.black}
                unfillColor={colors.white}
                text={title}
                iconStyle={{ borderColor: colors.black,borderRadius:0 }}
                innerIconStyle={{ borderWidth: 2, borderRadius:0 }}
                style={{ flex:1}}
                textStyle={{ fontFamily: "Inter_700Bold" , color:colors.black}}
                onPress={(isChecked) => {}}
                isChecked={isChecked}
            />
            <TouchableOpacity onPress={onDelete}>
            <FontAwesome5 name="trash" size={20} color="black" />
            </TouchableOpacity>
            
    </View>
  )
}

export default CheckBoxItem

