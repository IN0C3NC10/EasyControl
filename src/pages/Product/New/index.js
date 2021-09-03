import React, { useState } from 'react';
import { Text, TextInput, View, Picker, TouchableOpacity } from 'react-native';
import styles from './style';
import firebase from '../../../config/firebaseconfig'

export default function New({ navigation, route }) {
    const database = firebase.firestore()
    const idUser = route.params.idUser
    // ..setando os parâmetros iniciais
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [status, setStatus] = useState("Ativo")

    /*  -------------------------------------------------------------------------------------------------------
        ..FUNÇÃO QUE INSERE OS DADOS
        -------------------------------------------------------------------------------------------------------*/
    function addProduct() {
        // ..realiza a persistencia dos dados, lembrando que a "colletion" tem que estar igual ao Database
        database.collection(idUser).add({
            name: name,
            price: price,
            quantity: quantity,
            status: status,
        })
        // ..retorna para a página anterior, pós inserção
        navigation.navigate("List Products",{idUser:idUser,})
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Ex. Alex Tromboghosy" />
                <Text style={styles.label}>Price</Text>
                <TextInput value={price} onChangeText={setPrice} style={styles.input} placeholder="Ex. 14.56" />
                <Text style={styles.label}>Quantity</Text>
                <TextInput value={quantity} onChangeText={setQuantity} style={styles.input} placeholder="Ex. 5" />
                <Text style={styles.label}>Status</Text>
                <Picker selectedValue={status} style={styles.comboBox} onValueChange={(itemValue) => setStatus(itemValue)}>
                    <Picker.Item label="Ativo" value="true" />
                    <Picker.Item label="Inativo" value="false" />
                </Picker>
            </View>
            <TouchableOpacity onPress={() => { addProduct() }} style={styles.saveFrame}>
                <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}