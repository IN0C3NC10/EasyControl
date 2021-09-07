import React, { useState, useEffect } from 'react';
import { FontAwesome } from "@expo/vector-icons"
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import firebase from '../../../config/firebaseconfig';
import styles from './style';

export default function List({ navigation, route }) {
    // ..recupera o idUser via rota e o atribui para uma constante
    const idUser = route.params.idUser
    const message = route.params.message
    const [product, setProduct] = useState([])
    const database = firebase.firestore()

    /*  -------------------------------------------------------------------------------------------------------
        ..FUNÇÃO REQUISITADA NO MOMENTO EM QUE A TELA STARTA
        -------------------------------------------------------------------------------------------------------*/
    useEffect(() => {
        // ..o nome da collection, é o que esta presente no banco
        database.collection(idUser).onSnapshot((query) => {
            const list = []
            // ..realiza a inserção dos dados com um "for each" e os insere da constante "list"
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setProduct(list)
        })
    }, []);

    /*  -------------------------------------------------------------------------------------------------------
        ..FUNÇÃO REQUISITADA NO MOMENTO EM QUE A TELA STARTA
        -------------------------------------------------------------------------------------------------------*/
    function logout() {
        firebase.auth().signOut().then(() => {
            // Logout acontecer com sucesso.
            navigation.navigate("Login")
          }).catch((error) => {
            // Caso ocorrer algum erro.
            console.log("Aconteceu o seguinte BO..:"+error)
          });
    }

    return (
        <View style={styles.container}>
            <View style={styles.frameTitle}>
                <Text style={styles.textTitle} onPress={() => navigation.navigate("List Products",{idUser: idUser})}>
                    PRODUTOS
                </Text>
                <Text style={styles.textLogout} onPress={() => logout()}>
                    Sair <FontAwesome name="sign-out" size={18} color="white" />
                </Text>
            </View>
            {message != null
            ?
            <View style={styles.frameMessage}>
                <Text style={styles.textMessage}>{message}</Text>
            </View>
            :
                <View />
            }
            <FlatList
                data={product}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listItens}>
                            <TouchableOpacity style={styles.listItem}>
                                {/* ..quando chamar a tela já envia os parâmetros, neste caso os atributos do item em específico */}
                                <Text
                                    style={styles.item}
                                    onPress={() => navigation.navigate("Details Product", {
                                        //.. envia o "idUser", junto aos parametros do item
                                        idUser: idUser,
                                        id: item.id,
                                        name: item.name,
                                        price: item.price,
                                        quantity: item.quantity,
                                        status: item.status,
                                    })}> {item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <TouchableOpacity style={styles.backgroundButton} onPress={() => navigation.navigate("New Product", { idUser: idUser, })}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}