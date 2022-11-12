import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {

return(
    <View style = {styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <View style={styles.clientInfo}>
            {/*-----------typo de info de cliente----------------*/}
                <Text style={styles.taskText}>Client Name:</Text>
                <Text style={styles.taskText}>Phone:</Text>
                <Text style={styles.taskText}>Adress:</Text>
                <Text style={styles.taskText}>ID:</Text>
                <Text style={styles.taskText}s>Coments: </Text>
            </View>
            {/*-----------info de cliente----------------*/}
            <View style={styles.serverInfo}>
                <Text style={styles.clientText}>Client Name:</Text>
                <Text style={styles.clientText}>Phone:</Text>
                <Text style={styles.clientText}>Adress:</Text>
                <Text style={styles.clientText}>ID:</Text>
                <Text style={styles.clientText}s>Coments: </Text>

            </View>
            <Text style = {styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>

)

}

const styles = StyleSheet.create({

    item:{
        paddingHorizontal: 20,
        backgroundColor: '#4874a8',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,


    },

    serverInfo:{
        flexDirection: 'column',
        marginLeft: 10,


    },
    taskText:{
        color: '#fff',
        fontWeight: 'bold',
    },
    clientText:{
        color: '#fff',
        fontStyle:'italic',
    },

    clientInfo:{
        marginBottom: 10,
        flexDirection: 'column',
        
        

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#4874a8',
        opacity: 0.4,
        borderRadius:5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '100%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#4874a8',
        borderWidth: 2,
        borderRadius: 5,
        
    },

});

export default Task;