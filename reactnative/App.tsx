import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import SplashScreen from "./src/screens/SplashScreen";
import Task1 from "./src/screens/Task1";
import Task2_1 from "./src/screens/Task2_1";
import Task2_2 from "./src/screens/Task2_2";
import Task2_3 from "./src/screens/Task2_3";
import Task3_1 from "./src/screens/Task3_1";
import Task3_4_5 from "./src/screens/Task3_4_5";
import Task4_1_4 from "./src/screens/Task4_1_4";
import Overview from "./src/screens/Overview";
import {TaskProvider} from "./src/contexts/tasks.context";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
      <GestureHandlerRootView>
          <NavigationContainer>
              <Drawer.Navigator initialRouteName={"SplashScreen"} >
                <Drawer.Screen name="SplashScreen" component={SplashScreen} />
                <Drawer.Screen name="Task1" component={Task1} />
                <Drawer.Screen name="Task2_1" component={Task2_1} />
                <Drawer.Screen name="Task2_2" component={Task2_2} />
                <Drawer.Screen name="Task2_3" component={Task2_3} />
                <Drawer.Screen name="Task3_1" component={Task3_1} />
                <Drawer.Screen name="Task3_4_5" component={Task3_4_5} />
                <Drawer.Screen name="Task4_1_4" component={Task4_1_4} />
                  <TaskProvider>
                      <Drawer.Screen name="Overview" component={Overview} />
                  </TaskProvider>
              </Drawer.Navigator>
          </NavigationContainer>
      </GestureHandlerRootView>
  );
}
