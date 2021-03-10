import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor:"#7a7799",
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
    book: {
        padding:10,
        borderRadius:5,
        backgroundColor:"#CD5C5C",
        width:300,
        flexWrap: 'wrap',
        marginBottom:6,
    },
    title:{
      color:"#FFF",
      fontSize:14,
      fontWeight:"bold",
      flex:1,
      marginLeft:5,
    },
    autor:{
      color:"#000",
      fontSize:14,
      fontWeight:"bold",
      marginLeft:5,
    }
  });
  
  
  export default styles;