import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RepositoryListUrgent from './RepositoryListUrgent';
import data from "../data/urgentData";

export default function ScreenB({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topNoch}>
                <Text style={styles.sectionTittle}> Urgent Deliveries</Text>
            </View>
            <RepositoryListUrgent {...data} />
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
        backgroundColor: '#D63B2F',
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
        backgroundColor: '#992A22',
      },

});
