import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../../theme/Screen'
import AppTitle from '../../components/AppTitle'
import TopicCard from '../../components/TopicCard'
import AddButton from '../../components/AddButton'

const Home = () => {
  const data = [
    {
      name:"Work",
      tasksCount:10
    },
    {
      name:"Morning",
      tasksCount:20
    },
    {
      name:"Night",
      tasksCount:15
    },
  ]
  return (
    <>
    <Screen style={{flex:1}}>
      <View style={styles.titleContainer}>
      <AppTitle text={"My Todo lists"}/>
      </View>
      <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <TopicCard title={item.name}  tasksCount={item.tasksCount}/>}
        keyExtractor={item => item.name}
        style={{flex:1}}
      />
      </View>
    
    </Screen>
    <View style={styles.addButtonContainer}>
      <AddButton />
    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  titleContainer:{
    marginHorizontal:20,
    marginVertical:10
  },
  listContainer:{
    marginVertical:10,
    flex:1
    
  },
  addButtonContainer:{
    position:"absolute",
    bottom:60,
    right:10
  }
})