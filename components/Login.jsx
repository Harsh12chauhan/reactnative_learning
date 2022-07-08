// import { React } from "react";
import {Text, ScrollView } from "react-native";

const Login = (props) => {
  return (
    <ScrollView>
      <Text style={{fontSize:50}} >Login Page</Text>
      <Text style={{ fontSize: 50}}>{props.name1}</Text>
      <Text style={{ fontSize: 50 }}>{props.age1}</Text>
    </ScrollView>
  );
};
export default Login;
