import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';
import firebase from '../../../config/firebaseconfig'

export default function Details({ navigation, route }) {
    const database = firebase.firestore()
    const idUser = route.params.idUser
    // ..setando os parâmetros recebidos da lista, via rota
    const id = route.params.id
    const [name, setName] = useState(route.params.name)
    const [price, setPrice] = useState(route.params.price)
    const [quantity, setQuantity] = useState(route.params.quantity)
    const [status, setStatus] = useState(route.params.status)
    const [error, setError] = useState("")

    /*  -------------------------------------------------------------------------------------------------------
        ..Função que valida os dados
        -------------------------------------------------------------------------------------------------------*/
    function check() {
        if (name == "" || price == "" || quantity == "") {
            setError("Campos vazios!")
        } else if (isNaN(quantity)) {
            setError("[Quantidade] não é um número inteiro!")
        } else if (name.length < 4) {
            setError("[Nome] está muito curto!")
        } else {
            return true
        }
    }

    /*  -------------------------------------------------------------------------------------------------------
        ..FUNÇÃO RESPONSÁVEL PELA EDIÇÃO DO PRODUTO 
        -------------------------------------------------------------------------------------------------------*/
    function editProduct(id, name, price, quantity, status) {
        // ..verifica se deu bom em tudo
        if (check()) {
            // ..seta a mensagem de erro vazia
            setError("")
            let message = name + " editado com sucesso!"
            let priceFormated = price.replace(",", ".")
            // ..realiza a atualização dos dados, lembrando que a "colletion" tem que estar igual ao Database
            // ..neste caso a atribuição é via a "sessão" do usuario
            // ..como é preciso do parametro "id" é necessário "entrar" no doc
            database.collection(idUser).doc(id).update({
                name: name,
                price: priceFormated,
                quantity: quantity,
                status: status,
            })
            // ..retorna para a página anterior, pós inserção
            navigation.navigate("List Products", { idUser: idUser, message: message })
        }
    }

    /*  -------------------------------------------------------------------------------------------------------
        ..FUNÇÃO RESPONSÁVEL PELA EXCLUSÃO DO PRODUTO
        -------------------------------------------------------------------------------------------------------*/
    function deleteProduct(id) {
        let message = name + " deletado com sucesso!"
        // ..realiza a atualização dos dados, lembrando que a "colletion" tem que estar igual ao Database
        // ..como é preciso do parametro "id" é necessário "entrar" no doc
        database.collection(idUser).doc(id).delete()
        // ..retorna para a página anterior, pós inserção
        navigation.navigate("List Products", { idUser: idUser, message: message })
    }

    return (
        <View style={styles.container}>
            <View style={styles.frameTitle}>
                <Text style={styles.textTitle} onPress={() => navigation.navigate("List Products", { idUser: idUser })}>
                    <FontAwesome name="arrow-left" size={18} color="white" /> PRODUTOS
                </Text>
            </View>
            <View style={styles.form}>
                <View style={styles.title}><Text style={styles.titleText}>{name}</Text></View>
                <Text style={styles.label}>Nome</Text>
                <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Ex. Alex Tromboghosy" />
                <Text style={styles.label}>Preço (R$)</Text>
                <TextInput value={price} onChangeText={setPrice} style={styles.input} placeholder="Ex. 14.56" />
                <Text style={styles.label}>Estoque (Uni.)</Text>
                <TextInput value={quantity} onChangeText={setQuantity} style={styles.input} placeholder="Ex. 5" />
                <Text style={styles.label}>Status</Text>
                <Picker selectedValue={status} style={styles.comboBox} onValueChange={(itemValue) => setStatus(itemValue)}>
                    <Picker.Item label="Ativo" value="true" />
                    <Picker.Item label="Inativo" value="false" />
                </Picker>
                {error != ""
                    ?
                    <View style={styles.alertFrame}> 
                        <MaterialCommunityIcons name="alert-circle" size={24} color="red" />
                        <Text style={styles.alertText}>{error}</Text>
                    </View>
                    :
                    <Text />
                }
            </View>
            <TouchableOpacity onPress={() => { editProduct(id, name, price, quantity, status) }} style={styles.saveFrame}>
                <Text style={styles.saveButton}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { deleteProduct(id) }} style={styles.deleteFrame}>
                <Text style={styles.deleteButton}>Deletar</Text>
            </TouchableOpacity>
        </View>
    )
}