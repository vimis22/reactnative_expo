import React, {useState} from "react";
import {Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import TaskItem from "../reusable_components/TaskItem";
import {useTasks} from "../contexts/tasks.context";

const Overview = ({navigation}: any) => {
    const {tasks, addTask, clearTasks} = useTasks();
    const [newTasks, setNewTask] = useState<string>('');

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
                    onChangeText={text => setNewTask(text)}
                />

                <Button title="Add" onPress={() => {
                    addTask(newTasks);
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
                        renderItem={({ item }) => <TaskItem title={item} onPress = {()=>navigation.navigate("TaskDetails", {task: item})} />}
                    />
                )
            }

            {/*Clear Button*/}
            {
                tasks.length > 0 && (
                    <Button title={"Clear All Tasks"} onPress={clearTasks} />
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


export default Overview;