import React from "react";
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const SplashScreen = ({navigation}: any) => {
    return(
        <TouchableOpacity style={styles.pageContainer}>
            <Text style={styles.welcomeTitle}>Welcome!</Text>
            <View>
                <Text style={styles.mainText}>
                    Please click on left corner to find the solutions to the exercises.
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#330099',
    },
    welcomeTitle: {
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
    },
    mainText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'white',
    }
});

export default SplashScreen;