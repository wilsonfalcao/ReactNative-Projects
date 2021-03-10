import React,{useState,useEffect} from "react";
import 'react-native-gesture-handler';
import {Image,View,FlatList,Text,TouchableOpacity, ActivityIndicator} from "react-native";
import styleconfiguracao from "./styleconfiguracao";
import {GETBOOK_SKOOB_} from "../../../model/api/indicedelivros";


function Configuracao({route,navigation}){

    const [data, SetData] = useState(0);
    const [isloadingItens,SetLoadItens] = useState(true);
    const {valueToSearch} = route.params;


    const NavigationInicial = () =>{

        navigation.replace("Inicial");
    }

    useEffect(
        
        ()=>{

        isloadingItens ?

        GETBOOK_SKOOB_(valueToSearch).then(JSON => {
            SetData(JSON)
        }).finally(SetLoadItens(false)) : null;

        },[]
    
    );


    const renderItem = ({ item }) => (
        <View style={styleconfiguracao.book}>
            <TouchableOpacity onPress={()=>
                                            navigation.navigate("ViewBook",{codigo:item.isbn})}
                                            style={{flexDirection:"row",}}>
                <Image style={{width:70,height:100,marginLeft:2,marginTop:2,marginBottom:2}} source={{uri:item.imagem}}/>
                <View style={{flex:1,flexDirection:"column"}}>
                    <Text style={styleconfiguracao.title}>{item.titulo}</Text>
                    <Text style={styleconfiguracao.autor}>{item.autor}</Text>
                    <Text style={styleconfiguracao.autor}>{item.isbn}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return(

        <View style={styleconfiguracao.container}>
            
            {isloadingItens ? 
            
            <Text>Carregando</Text>:
           
           (<View style={{height:550}}>
                <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                />
            </View>)
            }

            <TouchableOpacity style={styleconfiguracao.buttonNavegation} onPress={NavigationInicial}>
                <Text>Voltar para Inicial</Text>
            </TouchableOpacity>
            
           
        </View>

    );
}

export default Configuracao;