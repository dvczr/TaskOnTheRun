import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigator, TasksStackNavigator } from "./StackNavigator";
import { ArrayContext } from "../Context/ArrayContext";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import AboutModal_CC from "../CustomComponent/AboutModal";
import SettingsModal from "../CustomComponent/SettingsModal";
import { TouchableOpacity } from "react-native-gesture-handler";

import Title from "../CustomComponent/Title";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { badgeCounter } = useContext(ArrayContext);
  return (
    <Tab.Navigator
      screenOptions={{
        title: <Title />,
        tabBarShowLabel: false,
        headerTransparent: true,
        headerTitle: <Title />,
        tabBarStyle: {
          // backgroundColor: "rgba(144, 81, 125, 0.75)",
          backgroundColor: "#90517D",
          borderTopColor: "#4E346C",
          borderTopWidth: 1,
        },
        headerRightContainerStyle: {
          paddingRight: 10,
          marginLeft: 20,
        },
        headerTitleStyle: {
          marginLeft: -20,
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
          marginRight: 20,
          justifyContent: "center",
        },
        headerLeft: () => <SettingsModal />,
        headerRight: () => <AboutModal_CC />,
      }}
    >
      <Tab.Screen
        name="+Add Task"
        component={HomeStackNavigator}
        options={{
          title: <Title />,
          tabBarIcon: () => (
            <TouchableOpacity
              hitSlop={{ top: 25, bottom: 25, left: 50, right: 50 }}
            >
              <MaterialIcons
                style={styles.horizontalFlip}
                name="playlist-add"
                size={50}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Task List"
        component={TasksStackNavigator}
        options={{
          tabBarStyle: {
            // backgroundColor: "rgba(144, 81, 125, 0.75)",
            backgroundColor: "#90517D",
            borderTopColor: "#4E346C",
            borderTopWidth: 1,
          },
          tabBarBadgeStyle: {
            color: "white",
            backgroundColor: "purple",
            fontWeight: "bold",
          },
          tabBarBadge: badgeCounter,
          tabBarIcon: () => (
            <TouchableOpacity
              hitSlop={{ top: 25, bottom: 25, left: 50, right: 50 }}
            >
              <FontAwesome5 name="tasks" size={35} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  horizontalFlip: {
    transform: [{ rotateY: "180deg" }],
  },
});
