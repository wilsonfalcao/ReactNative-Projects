import React, { useState } from "react";
import {View,Text,StyleSheet,Button} from "react-native";


function ButtonElement(props){

    const [Count, setCount] = useState(null);
    const [showMen, setShowMen] = useState(false);

    const _validaData = () => {
        
        if(props.mensagem != ""){
            setCount(props.mensagem)
            setShowMen(true);
        }
    }
    
    return(
        <View>
            
            <Button onPress={_validaData} title="Aperte para somar" />

            {showMen && (
                
            <View style={styles.container}>
                <Text style={styles.textFont}>{Count}</Text>
            </View>

            )}

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
    marginTop:13,
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


export default ButtonElement;