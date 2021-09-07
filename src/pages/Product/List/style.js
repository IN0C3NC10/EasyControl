import { StyleSheet } from "react-native";
// ..definição das cores principais e secundárias
let main = "#3F84E0";
let sub = "black";
let third = "#bdbdbd";
let sucess = "#00b300";

const styles = StyleSheet.create({
    
    // ..estrutura base
    container:{
        flex:1,
        backgroundColor:"white",
    },
    // ..título, ou a barra superior
    frameTitle:{
        padding:20,
        backgroundColor:main,
        justifyContent:"space-between",
        flexDirection:"row",
        borderBottomWidth:2,
        borderBottomColor:sub,
    },
    textTitle:{
        color:"white",
        fontWeight:"bold"
    },
    textLogout:{
        color:"white",
        fontWeight:"bold",
    },
    // ..mensagem de retorno
    frameMessage:{
        padding:10,
        backgroundColor:sucess,
        justifyContent:"center",
        flexDirection:"row",
    },
    textMessage:{
        color:"white",
        fontWeight:"bold"
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
        // backgroundColor: third,
        borderBottomWidth:1,
        borderColor:third,
        justifyContent:"center",
    },
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