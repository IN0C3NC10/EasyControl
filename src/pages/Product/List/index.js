import React, { useState, useEffect } from 'react';
import {FontAwesome} from "@expo/vector-icons"
import { Text, View, FlatList, TouchableOpacity  } from 'react-native';
import firebase from '../../../config/firebaseconfig';
import styles from './style';

export default function List({navigation}) {
    
    const [product, setProduct]= useState([])
    const database = firebase.firestore()

    // ..FUNÇÃO REQUISITADA NO MOMENTO EM QUE O APP STARTA
    useEffect(() => {
        // ..o nome da collection, é o que esta presente no banco
        database.collection("Products").onSnapshot((query)=>{
            const list = []
            // ..realiza a inserção dos dados com um "for each" e os insere da constante "list"
            query.forEach((doc)=>{
                list.push({...doc.data(), id:doc.id})
            })
            setProduct(list)
        })
    }, []);

    return(
        <View style={styles.container}>
            <FlatList
                data={product}
                renderItem={({item})=>{
                    return(
                    <View style={styles.listItens}>
                        <TouchableOpacity style={styles.listItem}>
                            {/* ..quando chamar a tela já envia os parâmetros, neste caso os atributos do item em específico */}
                            <Text 
                                style={styles.item}
                                onPress={()=>navigation.navigate("Details Product",{
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    quantity: item.quantity,
                                    status:item.status,
                                })}> {item.name}</Text>
                            {/* <FontAwesome name="edit" size={23} color="#fa2e6a" /> */}
                        </TouchableOpacity>
                    </View>
                    )
                }}
            />
            <TouchableOpacity style={styles.backgroundButton} onPress={()=>navigation.navigate("New Product")}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}