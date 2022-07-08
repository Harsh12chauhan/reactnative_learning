import React from 'react'
import { Text, View, StyleSheet, Image } from "react-native";

const Home = () => {

  return (
    <>
      <View>
        <Text style={styles.textelement}>Home</Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image source={require('../Image/img.gif')} />
      </View>
      
    </>
  )
};
export default Home

const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  },
  textelement: {
    marginTop: 20,
    fontSize: 45,
    textAlign: "center",
    borderBottomWidth: 1,
    marginHorizontal: 50
  },
  button1: {
    marginTop: 40,
    borderRadius: 60,
    borderRadius: 10,
    marginHorizontal: 60,
  },
  curve: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
})
