import React from "react";
import {Text, StyleSheet, View, Button} from 'react-native';

interface TaskItemProps {
    title: string;
    onPress?: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, onPress }) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{title}</Text>
            <Button title="Done" onPress={onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#6200ee',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
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