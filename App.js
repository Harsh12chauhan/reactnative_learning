import React from "react";
import { View,Text, Button,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./components/Form";
import Counter from "./components/Counter";
import Home from "./components/Home";
import  Cars  from "./components/Cars";
import  Cartoons  from "./components/Cartoons";
import  Places  from "./components/Places";

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <Home />
      <View style={styles.button1}>
          <Button title='Places' color="black" onPress={()=>navigation.navigate('Places')} />
        </View>
        <View style={styles.button1}>
          <Button title='Cars' color="black" onPress={()=>navigation.navigate('Cars')} />
        </View>
        <View style={styles.button1}>
          <Button title='Cartoons' color="black" onPress={()=>navigation.navigate('Cartoons')} />
        </View>
        <View style={styles.button1}>
          <Button title='Counter' color="black"  onPress={()=>navigation.navigate('Counter')}/>
        </View>
      <View style={{ justifyContent: "center" }} >
        <View style={[styles.button1, styles.curve]}>
          <Button title='Form' color="#009688"  onPress={()=>navigation.navigate('Form')}  />
        </View> 
      </View>
    </View>
  );
}
function CounterScreen({navigation}) {
  return (
    <View>
      <Counter />
    </View>
  );
}
function PlaceScreen({navigation}) {
  return (
    <View>
      <Places/>
    </View>
  );
}
function CartoonScreen({navigation}) {
  return (
    <View>
      <Cartoons />
    </View>
  );
}
function CarScreen({navigation}) {
  return (
    <View>
      <Cars/>
    </View>
  );
}
function FormScreen({navigation}) {
  return (
    <View>
      <Form />
    </View>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "#009688",
              },
            }}
          />
          <Stack.Screen name="Form" component={FormScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen name="Places" component={PlaceScreen} />
          <Stack.Screen name="Cartoons" component={CartoonScreen} />
          <Stack.Screen name="Cars" component={CarScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// import { StyleSheet, Text, View } from 'react-native';
// // import Counter from './components/Counter';
// import Form from './components/Form';

// export default function App() {
//   // const title1="Let's Start Counting...";
//   return (

//     <>
//      <View style={styles.container}>
//       {/* <Counter title1= {title1}/>*/}
//      <Form/>
//      </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textelement:{
//     marginTop:20,
//     fontSize: 45,
//     borderBottomWidth:2,
//     borderBottomColor:"aqua"
//   }
// });

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