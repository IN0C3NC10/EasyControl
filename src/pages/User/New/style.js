import { StyleSheet } from "react-native";

// ..definição das cores principais e secundárias
let main = "#3F84E0";
let sub = "black";
let third = "#bdbdbd";

const styles = StyleSheet.create({
    // ..fundo de toda estrutura
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:50,
    },
    title:{
        fontSize:30,
        color:main,
        marginBottom:10,
        fontWeight:"bold",
    },
    input:{
        width:"80%",
        // ..ambas centralizam o componente
        marginRight:"auto",
        marginLeft:"auto",
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:third,
    },
    // ..mensagem de erro
    alert:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    alertText:{
        paddingLeft:10,
        color:sub,
        fontSize:16,
    },
    // ..botão de cadastrar
    buttonRegister:{
        width:"50%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:main,
        borderRadius:50,
        marginTop:30,
    },
    textRegister:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
    },
    // ..mensagem no rodapé para criar um cadastro
    message:{
        marginTop:20,
        color:"#4d5156",
    },
    login:{
        color:"#1877f2",
        fontWeight:"bold",
    },
});

export default styles