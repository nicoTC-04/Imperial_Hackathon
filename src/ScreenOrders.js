import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Task from '../components/tasks';
import RepositoryListActive from './RepositoryListActive';
import data from "../data/completedData";

export default function ScreenA({navigation}) {
    return(
        
            <View style={styles.container}>
                <View style={styles.topNoch}>
                    <Text style={styles.sectionTittle}> Today's Deliveries</Text>
                </View>
                <RepositoryListActive {...data} />
            </View>
        
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 50,
    },
    topNoch: {
        backgroundColor: '#0078d4',
        height: 140,
        borderRadius: 20,
    },
    sectionTittle: {

        color: '#fff',
        paddingLeft: 20,
        paddingTop: 80,
        fontSize: 24,
        fontWeight: 'bold',

    },
    container: {
        flex: 1,
        backgroundColor: '#40587c',
      },

});