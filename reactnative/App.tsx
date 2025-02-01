import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import SplashScreen from "./src/screens/SplashScreen";
import Task1 from "./src/screens/Task1";
import Task2_1 from "./src/screens/Task2_1";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
      <GestureHandlerRootView>
          <NavigationContainer>
              <Drawer.Navigator initialRouteName={"SplashScreen"} >
                <Drawer.Screen name="SplashScreen" component={SplashScreen} />
                <Drawer.Screen name="Task1" component={Task1} />
                <Drawer.Screen name="Task2" component={Task2_1} />
              </Drawer.Navigator>
          </NavigationContainer>
      </GestureHandlerRootView>
  );
}
