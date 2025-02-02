import React from "react";
import {Text, StyleSheet, View, Button, ScrollView} from 'react-native';

interface TaskItemProps {
    title: string;
}

const TaskItem: React.FC<TaskItemProps> = ({title}) => {
    return(
        <View style={styles.taskContainer}>
            <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{title}</Text>
            </View>
            <Button title="Done" onPress={() => console.log('Done')} />
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#6200ee',
        borderRadius: 12,
        borderWidth: 1,
        borderColor:'#ddd',
        padding: 8,
        flexDirection: 'row',
        marginBottom: 5,
    },
    taskInfoSetup: {
        flex: 1,
        justifyContent: 'center',
    },
    taskText: {
        fontSize: 18,
    }
})

export default TaskItem;