import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';
import firebase from '../../../config/firebaseconfig'

export default function New({navigation}) {

    // const database = firebase.firestore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // ..FUNÇÃO RESPONSÁVEL PELO CRIAÇÃO DE USUÁRIO VIA SENHA E EMAIL
    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate("List Products", {
                    idUser:user.uid,
                })
            })
            .catch((error) => {
                setError(true)
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("Código de erro:"+errorCode+"\nMotivo:"+errorMessage)
            });
    }
    
    return(
        <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Create account</Text>
        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter your e-mail" type="Text" />
        <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.input} placeholder="Enter your password" type="Password" />
        {error == true
            ?
            // ..caso tenha algum erro
            <View style={styles.alert}>
                <MaterialCommunityIcons name="alert-circle" size={24} color="red" />
                <Text style={styles.alertText}>E-mail or Password invalid!</Text>
            </View>
            :
            <View />
        }
        {email == "" || password == ""
            ?
            // ..senha ou email vazios, ele exibe um botão desabilitado
            <TouchableOpacity style={styles.buttonRegister} disabled={true}>
                <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={register} style={styles.buttonRegister}>
                <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>
        }
        <Text style={styles.message}>
            Already have an account?
            <Text onPress={() => navigation.navigate("Login")} style={styles.login}> Login!</Text>
        </Text>
        <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
    )
}