import { React, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    return (
        <View >
            <Text style={styles.text1}>Form</Text>
            <Text style={styles.text2}>{name}</Text>
            <TextInput style={[styles.text2,styles.formborder]} placeholder='Name' onChangeText={(e) => { setName(e) }} />
            <Text style={styles.text2}>{email}</Text>
            <TextInput style={[styles.text2,styles.formborder]} placeholder='Email' onChangeText={(e) => { setEmail(e) }} />
            <Text style={styles.text2}>{password}</Text>
            <TextInput style={[styles.text2,styles.formborder]} secureTextEntry={true} placeholder='Password' onChangeText={(e) => { setPassword(e) }} />
            <Text style={styles.text2}>{confirmpassword}</Text>
            <TextInput style={[styles.text2,styles.formborder]} secureTextEntry={true} placeholder='Confirm Password' onChangeText={(e) => { setConfirmPassword(e) }} />
            <View style={styles.button1}>
            <Button title='Submit' color={"black"}  />
            </View>
        </View>
    )
};
export default Form
const styles = StyleSheet.create({
    text1: {
        fontSize: 60,
        textAlign: "center",
        marginBottom: 30,
        borderBottomWidth: 2,
        marginHorizontal: 20
    },
    text2: {
        padding: 3,
        paddingLeft: 18,
        color: "black",
    },
    formborder:{
        fontSize: 25,
        margin: 8,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderRadius:40
    },
    button1:{
        marginTop:40,
        borderRadius:60,
    }
})