import React from "react";
import {View,Text} from "react-native";
import styleAccount from "./styleAccount";
import 'react-native-gesture-handler';



function Account({navigation}){
    

    return(
        <View style={styleAccount.container}>
            <Text style={styleAccount.buttonNavegation}>
                Olá Raphael, essa é sua tela de conta.
            </Text>
        </View>
    );
}

export default Account;