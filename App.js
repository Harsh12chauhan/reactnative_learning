import { React } from "react";
import {  Text, ScrollView, Button,StyleSheet } from "react-native";
import  Login  from "./components/Login";
import Signup  from "./components/Signup";

const App = () => {

const name= "harsh";
const age =" 20";

  function onclick() {
    alert("HELLO")
  }

  return (
    <ScrollView >
      <Login name1={name} age1={age}/>
      <Text style={{ fontSize: 50,color:'red',backgroundColor:'black' }}>My App</Text>
      <Text style={{ fontSize: 50 }}>Hello world</Text>
      <Text style={{ fontSize: 50 }}>My App</Text>
      <Text style={[styles.try1, styles.try2]}>Try once </Text>
      <Signup/>
      <Button title="Click"  onPress={onclick} color="#1E6738"/>
    </ScrollView>
  );
}
export default App;

const styles = StyleSheet.create({
  try1:{
    color:'red',
    fontSize:100
  },
  try2:{
    backgroundColor:'black',
  }
})

