import React, { useState } from "react";
import {View,TextInput,Text,StyleSheet,Button} from "react-native";
import ButtonElement from "../components/ButtonElement";

function Welcome(props){
    
    var VV = props.saudacao;

    const [inputTextName, setInputTextName] = useState("Hello World");
      
    return(

        <View>
            <TextInput 
            onChangeText={inputTextName=>setInputTextName(inputTextName)} 
            style={styles.container} 
            placeHolder="Digite aqui" />
            
            <ButtonElement mensagem={inputTextName}/>
            
        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: 230,
    padding:10,
    borderRadius:5,
    alignItems: 'center',
    margin:3,
  },
  textFont:{
      color:"#000",
      fontSize:15,
      fontWeight:"bold",
      margin:2,
  },
  textFont2:{
      color:"#000",
      fontSize:10,
      fontWeight:"normal",
  },
});


export default Welcome;