import React from "react";
import 'react-native-gesture-handler';
import { View,Text,TouchableOpacity} from "react-native";
import styleviewbook from "./styleviewbook";

function ViewBook({route,navigation}){

    const {codigo} = route.params;

    const stackInicial = () =>{
        navigation.goBack();
    }

    return(
        <View style={styleviewbook.container}>
            <Text style={styleviewbook.buttonNavegation}>
                {codigo}
            </Text>
            <TouchableOpacity style={styleviewbook.buttonNavegation} onPress={stackInicial}>
                <Text>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ViewBook;