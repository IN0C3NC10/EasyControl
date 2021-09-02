import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import styles from './style';
import firebase from '../../../config/firebaseconfig'

export default function New({navigation, route}) {

    return(
        <View style={styles.container}>
           <Text>New User View</Text>
        </View>
    )
}