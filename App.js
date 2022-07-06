import { React } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  ImageBackground,
} from "react-native";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

const App = () => {
  function onClick() {
    alert("Hello");
  }
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            height: 100,
            margin: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageBackground
            source={{ url: "https://i.stack.imgur.com/1dpmw.gif" }}
            style={{flex:1,  justifyContent:"center", alignItems:"center"}}
          >
            <Text style={{fontSize: 50}}>Hello</Text>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 4,
            backgroundColor: "purple",
            height: 100,
            margin: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./Image/img.png")}
            style={{ height: 400, resizeMode: "contain" }}
          ></Image>

          <Text style={{ color: "white" }}>Purple Color</Text>
        </View>
        <View
          style={{
            flex: 6,
            backgroundColor: "red",
            height: 100,
            margin: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Red Color</Text>
          <Image
            source={{ url: "https://i.stack.imgur.com/1dpmw.gif" }}
            style={{ height: 100, resizeMode: "contain" }}
          ></Image>
        </View>
        <View
          style={{
            flex: 7,
            backgroundColor: "black",
            height: 100,
            margin: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./Image/img.gif")}
            style={{ height: 120, resizeMode: "contain" }}
          ></Image>
          <Text style={{ color: "white" }}> Black color</Text>
        </View>
      </View>
      <Button title="Click" onPress={onClick} color="#1E6738" />
    </ScrollView>
  );
};
export default App;
