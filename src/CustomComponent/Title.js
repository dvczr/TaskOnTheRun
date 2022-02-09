import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const Title = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="pulse"
        direction="alternate-reverse"
        duration={1250}
        iterationCount="infinite"
      >
        <View style={styles.box}>
          <Text style={styles.textTitle}>Task on the Run</Text>
        </View>
      </Animatable.Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 1,
  },
  box: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "700",
  },
});
