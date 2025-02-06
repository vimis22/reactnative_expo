import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskProvider } from "../contexts/tasks.context";
import Overview from "./Overview";
import TaskDetails from "./TaskDetails";

const Stack = createNativeStackNavigator();

export default function Task5() {
    const scrOptions = {
        headerStyle: {
            backgroundColor: "#6200ee",
        },
        headerTitleStyle: {
            color: "white",
        },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
    };

    return (
        <NavigationContainer>
            <TaskProvider>
                <Stack.Navigator screenOptions={scrOptions}>
                    <Stack.Screen name="Overview" options={{ headerShown: false }} component={Overview} />
                    <Stack.Screen name="TaskDetails" component={TaskDetails} />
                </Stack.Navigator>
            </TaskProvider>
        </NavigationContainer>
    );
}

