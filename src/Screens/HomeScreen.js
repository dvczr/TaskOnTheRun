import React from "react";
import { StyleSheet } from "react-native";

import NewTask from "../CustomComponent/NewTask";

const HomeScreen = ({ navigation }) => {
  return <NewTask navigation={navigation} />;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
