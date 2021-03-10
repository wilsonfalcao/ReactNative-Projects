import React,{useState} from "react";
import 'react-native-gesture-handler';
import { ImageBackground,View,Text, TouchableOpacity,TextInput} from "react-native";
import styleinicial from "./styleinicial";

const imageURL = {uri:"https://source.unsplash.com/collection/99223697/420x800"};

function Inicial({navigation}){

    const tabConfiguracao = () =>{
        navigation.navigate("Configuracao",{termSearch:inputTextName});
    }

    const [inputTextName, setInputTextName] = useState(0);

    return(
        <View style={styleinicial.container}>
            <ImageBackground source={imageURL} style={styleinicial.image}>
                <View style={styleinicial.centerview}>

                <TextInput 
                    onChangeText={inputTextName=>setInputTextName(inputTextName)} 
                    style={styleinicial.buttonNavegation}
                    placeHolder="Digite aqui" 
                />

                    <TouchableOpacity onPress={tabConfiguracao} style={styleinicial.buttonNavegation}>
                        <Text>Seguir navegando...</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Inicial;