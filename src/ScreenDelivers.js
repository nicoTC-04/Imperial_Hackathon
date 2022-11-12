import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import data from "../data/completedData";
import RepositoryList from './RepositoryList';

export default function ScreenC({ navigation }) {
    return (     
        <View>
            <View style={styles.topNoch}>
                <Text style={styles.sectionTittle}> Delivered</Text>
            </View>
            <RepositoryList {...data} />
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
        backgroundColor: '#4c9ccf',
        //marginLeft:40,
        height: 140,
        borderRadius: 20,
    },
    sectionTittle: {
        //width:400,
        //height:50,
        color: '#fff',
        paddingLeft: 20,
        paddingTop: 80,
        fontSize: 24,
        fontWeight: 'bold',

    },
    container: {
        flex: 1,
        backgroundColor: '#DADAE6',
      },

});

