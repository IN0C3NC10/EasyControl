import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import styles from './style';
import database from '../../../config/firebaseconfig'

export default function Details({navigation, route}) {
    // ..setando os parâmetros recebidos da lista, via rota
    const id = route.params.id
    const [name, setName] = useState(route.params.name)
    const [price, setPrice] = useState(route.params.price)
    const [quantity, setQuantity] = useState(route.params.quantity)
    const [status, setStatus] = useState(route.params.status)

    // ..FUNÇÃO RESPONSÁVEL PELA EDIÇÃO DO PRODUTO 
    function editProduct(id,name,price,quantity,status) {
        // ..realiza a atualização dos dados, lembrando que a "colletion" tem que estar igual ao Database
        // ..como é preciso do parametro "id" é necessário "entrar" no doc
        database.collection("Products").doc(id).update({
            name: name,
            price: price,
            quantity: quantity,
            status: status,
        })
        // ..retorna para a página anterior, pós inserção
        navigation.navigate("List Products")
    }

    // ..FUNÇÃO RESPONSÁVEL PELA EXCLUSÃO DO PRODUTO
    function deleteProduct(id) {
        // ..realiza a atualização dos dados, lembrando que a "colletion" tem que estar igual ao Database
        // ..como é preciso do parametro "id" é necessário "entrar" no doc
        database.collection("Products").doc(id).delete()
        // ..retorna para a página anterior, pós inserção
        navigation.navigate("List Products")
    }

    return(
        <View style={styles.container}>
            <View style={styles.form}>
            <View style={styles.title}><Text style={styles.titleText}>{name}</Text></View>
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
            <TouchableOpacity onPress={() => { editProduct(id,name,price,quantity,status) }} style={styles.saveFrame}>
                <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { deleteProduct(id) }} style={styles.deleteFrame}>
                <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}