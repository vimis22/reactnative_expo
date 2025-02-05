import React, {createContext, useContext} from "react";

interface TaskContextInterface {
    tasks: string[];
    addTask: (newTask: string) => void;
    removeTask: (taskToRemove: string) => void;
    clearTasks: () => void;
}

const TaskContext = createContext<TaskContextInterface>({
    tasks: [],
    addTask: (newTask: string) => {},
    removeTask: (taskToRemove: string) => {},
    clearTasks: () => {},
});

export const TaskProvider = ({ children }) => {
    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, clearTasks }}>
            {children}
        </TaskContext.Provider>
    );
};


export const useTasks = () => useContext(TaskContext);
