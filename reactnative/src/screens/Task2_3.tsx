import React from "react";
import {View, Text, StyleSheet, TextInput, Button, ScrollView, SafeAreaView} from "react-native";
import TaskItem from "../reusable_components/TaskItem";

const Task2_3 = ({navigation}: any) => {
    return (
        <SafeAreaView style={styles.background}>
            {/*The styling task is inserted here*/}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>To-Do App</Text>
            </View>

            <View style={{ padding: 20, backgroundColor: '#6200ee', alignItems: 'center', marginBottom: 10, }} >
                <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', }}>To-Do App</Text>
            </View >

            <View style={{flexDirection: 'row', marginBottom: 10, marginHorizontal: 16}}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderRadius: 6, padding: 10, backgroundColor: '#fff' }}
                    placeholder="Enter a new task..."
                    placeholderTextColor="#aaa"
                />
                <Button title="Done" onPress={() => { }} />
            </View>

            <View style={{ height: 6, backgroundColor: '#6200ee', marginBottom: 10,}} />

            <ScrollView>
                <TaskItem title="Do 20 push-ups"/>
                <TaskItem title="Remember my meds"/>
                <TaskItem title="Meditation 10min"/>
                <TaskItem title="Eat cake"/>
                <TaskItem title="Be Awesome Today"/>
            </ScrollView>

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
    }
})

export default Task2_3