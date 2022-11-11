import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ScreenB({navigation}) {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen B
            </Text>
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
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
    topNoch:{
        backgroundColor: '#55BCF6',
        height: 140,
        borderRadius:20,
    },
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',

    },
        tasksWraper: {
        
        
        
        
    },
    sectionTittle:{
        paddingLeft: 20,
        paddingTop: 80,
        fontSize: 24,
        fontWeight: 'bold',

    },
    items:{
        marginTop:30,
        paddingHorizontal: 15

    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#COCOCO',
        borderWidth: 1, 
        width: 250,


    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#55BCF6',
        opacity: 0.6,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#COCOCO',
        borderWidth: 1, 



    },
    addText: {},



});