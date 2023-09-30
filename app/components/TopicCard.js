import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppTitle from './AppTitle'
import AppText from './AppText'
import colors from '../theme/colors'

const TopicCard = ({title, tasksCount, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}> 
      <AppTitle text={title}/>
      <View style={styles.tasksCountContainer}>
      <AppText style={styles.tasksCount} text={tasksCount+" tasks"}/>
      </View>
    </TouchableOpacity>
  )
}

export default TopicCard

const styles = StyleSheet.create({
    cardContainer:{
        borderWidth:2,
        width:"90%",
        padding:20,
        borderRadius:15,
        marginTop:10,
        alignSelf:"center"
    },
    tasksCountContainer:{
       
        alignItems:"flex-end"
    },
    tasksCount:{
            color:colors.medium
    }
})