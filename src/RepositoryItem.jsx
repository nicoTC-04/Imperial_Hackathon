import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const RepositoryItem = (userData) => (
    <View style={styles.item}>

        <View style={styles.itemLeft}>
            <View style={styles.clientInfo}>

                {/*-----------typo de info de cliente----------------*/}
                <Text style={styles.taskText}>Client Name:</Text>
                <Text style={styles.taskText}>Phone:</Text>
                <Text style={styles.taskText}>Adress:</Text>
                <Text style={styles.taskText}>ID:</Text>
                <Text style={styles.taskText}>Safe Space: </Text>
            </View>

            {/*-----------info de cliente----------------*/}
            <View style={styles.serverInfo}>
                <View key={userData.id} style={styles.container}>
                    <Text style={styles.clientText}>{userData.clientName}</Text>
                    <Text style={styles.clientText}>{userData.phone}</Text>
                    <Text style={styles.clientText}>{userData.addres}</Text>
                    <Text style={styles.clientText}>{userData.clientID}</Text>
                    <Text style={styles.clientText}>{userData.safeSpace}</Text>

                </View>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    },
    item: {
        paddingHorizontal: 20,
        backgroundColor: '#bababa',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:20,
        marginTop:20,
    },
    serverInfo: {
        flexDirection: 'column',
        marginLeft: 10,
    },

    taskText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    clientText: {
        color: '#fff',
        fontStyle: 'italic',
    },

    clientInfo: {
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
        borderRadius: 5,
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
})

export default RepositoryItem