import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';
import firebase from '../../config/firebaseconfig'

export default function Login({ navigation }) {
    const database = firebase.firestore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // ..FUNÇÃO RESPONSÁVEL PELO LOGIN VIA SENHA E EMAIL
    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
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
            });
    }

    useEffect(() => {

        return () => {

        };
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Text style={styles.title}>Easy<Text style={styles.titlePart}>Control</Text></Text>
            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter your e-mail" type="Text" />
            <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.input} placeholder="Enter your password" type="Password" />
            {error === true
                ?
                <View style={styles.alert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="red" />
                    <Text style={styles.alertText}>Invalid e-mail or password</Text>
                </View>
                :
                <View />
            }
            {email == "" || password == ""
                ?
                <TouchableOpacity style={styles.buttonLogin} disabled={true}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={loginFirebase} style={styles.buttonLogin}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
            }
            <Text style={styles.message}>
                Don't have a registration?
                <Text onPress={() => navigation.navigate("New User")} style={styles.registration}> Subscribe now!</Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}