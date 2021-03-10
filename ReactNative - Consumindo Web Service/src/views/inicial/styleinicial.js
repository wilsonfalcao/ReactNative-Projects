import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    centerview:{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    buttonNavegation:{
        backgroundColor:"#FFF",
        padding:10,
        borderRadius:5,
        fontSize:14,
        fontWeight:"bold",
        color:"#000",
        width:220,
        marginTop:5,
        alignItems: "center",
    },
  });
  
  
  export default styles;