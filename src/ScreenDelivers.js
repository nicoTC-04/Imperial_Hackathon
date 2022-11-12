import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ScreenC({navigation}) {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen C
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

});
