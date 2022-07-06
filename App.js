import { React,useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
} from "react-native";

const App = () => {
  const name = "harsh";
  const [count, setCount] = useState(1)
  
  function add() {
    setCount(count+1)
  }
  function sub() {
    setCount(count-1)
  }

  return (
    <ScrollView>
      <View>
        <Button title="" onPress={add} color="white" />
        <Button title="" onPress={add} color="white" />
        <Text style={{ fontSize: 40 }}> {name}</Text>
        <Text style={{ fontSize: 40 }}> {count}</Text>
        <Button title="+" onPress={add} color="#1E6738" />
        <Button title="" onPress={add} color="white" />
        <Button title="" onPress={add} color="white" />
        <Button title="-" onPress={sub} color="red" />
      </View>
    </ScrollView>
  );
};
export default App;
