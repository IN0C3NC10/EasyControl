import { StyleSheet } from "react-native";

// ..definição das cores principais e secundárias
let main = "#fa2e6a";
let sub = "#E8E8E8";
let subdark = "#bdbdbd";

const styles = StyleSheet.create({
    // ..fundo de toda estrutura
    container: {
        flex: 1,
        backgroundColor: "white",
        // alignItems:"center",
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
        borderBottomColor:subdark,
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
        color: main,
    },
    // ..inputs
    input: {
        width: "90%",
        // ..ambas centralizam o componente
        marginRight: "auto",
        marginLeft: "auto",
        // height:50,
        // marginBottom:15,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: main,
    },
    comboBox: {
        height: 30,
        width: "90%",
        // ..ambas centralizam o componente
        marginRight: "auto",
        marginLeft: "auto",
        borderBottomWidth: 1,
    },
    // ..texto caso esteja invalido
    invalid:{
        width:"90%",
        marginTop:15,
        justifyContent:"center",
        // ..ambas centralizam o componente
        marginRight:"auto",
        marginLeft:"auto",
        fontSize:14,
        color: "#404040",
    },
    invalid1:{
        width:"90%",
        marginTop:15,
        justifyContent:"center",
        // ..ambas centralizam o componente
        marginRight:"auto",
        marginLeft:"auto",
        fontSize:14,
        color: "red",
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
        // borderRadius: 50,
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