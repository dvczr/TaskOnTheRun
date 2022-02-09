import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import * as Animatable from "react-native-animatable";

import Title from "../CustomComponent/Title";

const Splash = ({ navigation }) => {
  const bounceIn = {
    0: {
      opacity: 0,
      scale: 0.3,
    },
    0.2: {
      scale: 2.1,
    },
    0.4: {
      scale: 0.9,
    },
    0.6: {
      opacity: 1,
      scale: 5.03,
    },
    0.8: {
      scale: 0.97,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("TabNavigator");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation={bounceIn}
        duration={1000}
        iterationCount={2}
        direction="alternate"
      >
        <Title />
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(144, 81, 125, 0.75)",
  },
});
