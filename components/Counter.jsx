import { React, useState } from "react";
import { View, Text, ScrollView, Button,StyleSheet } from "react-native";

const Counter = () => {
  const title1 = "Counter"
  const [count, setCount] = useState(1);
  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }

  return (
    <ScrollView>
      <View>
      <View style={styles.box}>
        <Text style={{fontSize:30,color:"black", borderRadius:10,padding:10,marginBottom:12}}>{title1}</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontSize:160,color:"white",backgroundColor:"black", borderRadius:10,padding:10}}>{count}</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontSize:60,color:"white",backgroundColor:"black"}}></Text>
      </View>
      <View style={{ margin: 20 }}>
        <Button title="+" onPress={add} color="black" />
      </View>
      <View style={{ margin: 20 }}>
        <Button title="-" onPress={sub} color="black" />
      </View>
      </View>
    </ScrollView>
  );
};
export default Counter;
 const styles = StyleSheet.create({
  box:{
    alignItems:"center",
    }
 })