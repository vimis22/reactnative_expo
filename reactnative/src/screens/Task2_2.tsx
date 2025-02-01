import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Task2_2 = ({navigation}: any) => {
    return (
        <View style={styles.headerContainer}>
           <Text style={styles.headerText}>To-Do App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#3b3b3b',
        flex: 1,
    },
    headerContainer: {
        padding: 20,
        backgroundColor: '6200ee',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    }
})

export default Task2_2