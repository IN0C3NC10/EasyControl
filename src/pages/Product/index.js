import React, { useState, useEffect } from 'react';
import {FontAwesome} from "@expo/vector-icons"
import { Text, View, FlatList, TouchableOpacity  } from 'react-native';
import database from '../../config/firebaseconfig';
import styles from './style';

export default function Product({navigation}) {
    
    const [product, setProduct]= useState([])

    useEffect(() => {
        database.collection("Products").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id:doc.id})
            })
            setProduct(list)
        })
    }, []);

    return(
        <View style={styles.container}>
            <FlatList />
            <TouchableOpacity style={styles.backgroundButton}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}