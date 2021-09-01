import { StyleSheet } from "react-native";
// ..definição das cores principais e secundárias
let main = "#fa2e6a";
let sub = "#E8E8E8";

const styles = StyleSheet.create({
    
    // ..estrutura base
    container:{
        flex:1,
        backgroundColor:"white",
        paddingTop:20,
    },
    // ..background do botão de adição
    backgroundButton:{
        position:"fixed",
        width:50,
        height:50,
        bottom:30,
        left:20,
        backgroundColor: main,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },
    // ..botão de adição
    iconButton:{
        color:"white",
        fontSize:30,
        fontWeight:"bold"
    },
    // ..itens da lista (todos)
    listItens:{
        width:"100%",
        flexDirection:"row",
        marginTop:5,
        backgroundColor: sub,
        justifyContent:"center",
    },
    // ..item da lista (individual)
    // listItem:{
    //     justifyContent:"space-between",
    // },
    // ..texto do item
    item:{
        // backgroundColor:main,
        padding:12,
        paddingHorizontal:1000,
        marginBottom:5,
        color: main,
        fontWeight:"bold",
    }
   
});

export default styles