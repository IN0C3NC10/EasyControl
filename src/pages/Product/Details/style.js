import { StyleSheet } from "react-native";

// ..definição das cores principais e secundárias
let main = "#3F84E0";
let sub = "black";
let third = "#bdbdbd";

const styles = StyleSheet.create({
    // ..fundo de toda estrutura
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    // ..formulário
    form: {
        marginHorizontal: 30,
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
    // ..fundo do título
    title:{
        marginTop:5,
        alignItems:"center",
        width: "100%",
    },
    // ..título com o nome do componente
    titleText:{
        color:main,
        fontSize: 20,
        justifyContent:"center",
        fontWeight:"bold",
    },
    // ..labels
    label: {
        width: "90%",
        marginTop: 15,
        alignSelf: "flex-start",
        // ..ambas centralizam o componente
        marginRight: "auto",
        marginLeft: "auto",
        fontSize: 16,
        color: sub,
    },
    // ..inputs
    input: {
        width: "90%",
        // ..ambas centralizam o componente
        marginRight: "auto",
        marginLeft: "auto",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: third,
    },
    comboBox: {
        height: 30,
        width: "90%",
        // ..ambas centralizam o componente
        marginRight: "auto",
        marginLeft: "auto",
        borderBottomWidth: 1,
    },
    // ..mensagem de erro
    alertFrame:{
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
    //..background do botão salvar
    saveFrame: {
        position: "absolute",
        width: "45%",
        height: 50,
        bottom: 30,
        left: 20,
        backgroundColor: main,
        // borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    // ..texto do botão salvar
    saveButton: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    //..background do botão deletar
    deleteFrame:{
        position: "absolute",
        width: "45%",
        height: 50,
        bottom: 30,
        right: 20,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    // ..texto do botão deletar
    deleteButton:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
});

export default styles