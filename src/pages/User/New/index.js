import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';
import firebase from '../../../config/firebaseconfig'

export default function New({navigation}) {

    // const database = firebase.firestore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // ..validações e afins
    const [testPass, setTestPass] = useState("")
    const [error, setError] = useState("")

    /*  -------------------------------------------------------------------------------------------------------
        ..Função que valida os dados
        -------------------------------------------------------------------------------------------------------*/
        function check() {
            if (password != testPass) {
                setError("Senhas diferentes!")
            } else {
                return true
            }
        }
    
    /*  -------------------------------------------------------------------------------------------------------
        ..FUNÇÃO RESPONSÁVEL PELO CRIAÇÃO DE USUÁRIO VIA SENHA E EMAIL
        -------------------------------------------------------------------------------------------------------*/
    const register = () => {
        if(check()){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setError(false)
                let user = userCredential.user;
                navigation.navigate("List Products", {
                    idUser:user.uid,
                })
            })
            .catch((error) => {
                setError(true)
                let errorCode = error.code;
                let errorMessage = error.message;
                setError(errorCode)
                // ..algumas mensagens de erro
                if (errorCode == "auth/Error-email"){
                    setError("Email inválido!")
                }else if(errorCode == "auth/weak-password"){
                    setError("Senha com menos de 6 caractéres!")   
                }else if(errorCode == "auth/email-already-in-use"){
                    setError("E-mail já em uso!")
                }else{
                    setError("Erro ao cadastrar! Tente novamente!")
                }
                console.log("Código de erro:"+errorCode+"\nMotivo:"+errorMessage)
            });
        }
        
    }
    
    return(
        <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Crie sua conta</Text>
        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Ex. alextromboghosi@email.com" type="Text" />
        <TextInput value={testPass} onChangeText={(text) => setTestPass(text)} secureTextEntry={true} style={styles.input} placeholder="Insira sua senha.." type="Password" />
        <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.input} placeholder="Insira sua senha novamente.." type="Password" />
        {error != ""
            ?
            // ..caso tenha algum erro
            <View style={styles.alert}>
                <MaterialCommunityIcons name="alert-circle" size={24} color="red" />
                <Text style={styles.alertText}>{error}</Text>
            </View>
            :
            <View />
        }
        {email == "" || password == "" || testPass == ""
            ?
            // ..senha ou email vazios, ele exibe um botão desabilitado
            <TouchableOpacity style={styles.buttonRegister} disabled={true}>
                <Text style={styles.textRegister}>Cadastrar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={register} style={styles.buttonRegister}>
                <Text style={styles.textRegister}>Cadastrar</Text>
            </TouchableOpacity>
        }
        <Text style={styles.message}>
            Já possui uma conta?
            <Text onPress={() => navigation.navigate("Login")} style={styles.login}> Entre agora!</Text>
        </Text>
        <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
    )
}