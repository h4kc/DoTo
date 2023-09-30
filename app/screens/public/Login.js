import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import Translation from "../../translation/context";
import Screen from '../../theme/Screen';
import TopicCard from '../../components/TopicCard';
import AddButton from '../../components/AddButton';
import SecondaryButton from '../../components/SecondaryButton';



const Login = () => {
const {isRtl, t} = useContext(Translation)

  return (
    <Screen>
        <SecondaryButton text="Delete group" onPress={()=>console.log("Add")} color="danger"/>
    </Screen>
  )
}

export default Login

const styles = StyleSheet.create({})