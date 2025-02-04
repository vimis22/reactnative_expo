import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, FlatList, SafeAreaView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from "../reusable_components/TaskItem";

const Task4_1 = ({navigation}: any) => {
    const [tasks, setTask] = React.useState<string[]>([]);
    const [newTasks, setNewTask] = useState<string>('');

    useEffect(() => {
        const loadTasks = async () => {
            const storedTasks = await AsyncStorage.getItem("tasks");
            if(storedTasks){
                setTask(JSON.parse(storedTasks));
            }
        };
        loadTasks();
    });
    
    return (
        <SafeAreaView style={styles.background}>
            {/*The styling task is inserted here*/}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>To-Do App</Text>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInputfield}
                    placeholder="Enter a new task..."
                    placeholderTextColor="#aaa"
                    onChange={text => setTask(text)}
                />
                <Button title="Add" onPress={() => {
                    setTask([...tasks, newTasks]);
                    setNewTask("");
                }} />
            </View>

            <View style={styles.divider} />

            {
                tasks.length === 0 ? (
                    <Text style={styles.nullExistedTask}>No Task Defined Yet!</Text>
                ) : (
                    <FlatList
                        style={styles.tasksContainer}
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <TaskItem title={item} onPress={() => {
                            setTask(tasks.filter(task => task !== item));
                        }} />}
                    />
                )
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#3b3b3b',
        flex: 1,
    },
    headerContainer: {
        padding: 20,
        backgroundColor: '#330099',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    textInputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 16
    },
    textInputfield: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        backgroundColor: '#fff'
    },
    divider: {
        height: 6,
        backgroundColor: '#6200ee',
        marginBottom: 10,
    },
    tasksContainer: {
        paddingTop: 10,
        backgroundColor: '#330099',
    },
    nullExistedTask: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    }

})

export default Task4_1