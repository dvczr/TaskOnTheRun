import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "./src/Navigation/MainStackNavigator";

import { ArrayContext } from "./src/Context/ArrayContext";

export default function App() {
  const [array, updateArray] = useState([]);
  const [counter, setCounter] = useState(1);
  const badgeCounter = array.length != 0 ? array.length : null;

  return (
    <ArrayContext.Provider
      value={{ array, updateArray, counter, setCounter, badgeCounter }}
    >
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ArrayContext.Provider>
  );
}
