import React from "react";
import {SafeAreaView, View, Text, StyleSheet} from "react-native";

const TaskDetails = ({route}: any) => {
    const {task} = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Task Details</Text>
                <Text style={styles.taskText}>{task}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b3b3b",
    },
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    taskText: {
        fontSize: 18,
        color: "white",
        marginTop: 10,
    },
});

export default TaskDetails;