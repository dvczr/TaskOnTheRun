import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import TasksScreen from "../Screens/TasksScreen";
import AboutModal_CC from "../CustomComponent/AboutModal";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <AboutModal_CC />,
        }}
      />
    </Stack.Navigator>
  );
};

const TasksStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          headerLeft: () => <AboutModal_CC />,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, TasksStackNavigator };
