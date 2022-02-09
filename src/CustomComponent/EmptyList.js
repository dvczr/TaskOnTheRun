import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.fontText}>
          ...Unfortunately no task has been added yet!
        </Text>
        <Text style={styles.fontText}>
          Give it a try and{"\n"} add your first!
        </Text>
      </View>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "dashed",
    borderRadius: 75,
    marginTop: 100,
    margin: 25,
    backgroundColor: "#faf",
  },
  fontText: {
    lineHeight: 50,
    padding: 20,
    fontSize: 30,
    textAlign: "center",
  },
});
