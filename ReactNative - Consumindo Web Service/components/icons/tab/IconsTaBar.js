import React from 'react';
import 'react-native-gesture-handler';
import {View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { useState } from 'react';


function IconsTaBar(props){

    const [nameicon,setNameIconp] = useState(props.nameicon);
    const [iconcolor,setIconColorp] = useState(props.iconcolor);
    const [iconstyle,setIconStylep] = useState(props.iconstyle);

    return(
        <View>
            <AntDesign style={iconstyle} name={nameicon} size={24} color={iconcolor}/>
        </View>
    );

}

export default IconsTaBar;