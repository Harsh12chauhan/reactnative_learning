import React from 'react'
import { Text, View, Image } from "react-native";

const Cartoons = () => {
    return (
        <View>
            <Text style={{fontSize:30}}>Cartoons</Text>
            <Image source={require('../Image/ucb.gif')} />
        </View>
    )
}

export default Cartoons