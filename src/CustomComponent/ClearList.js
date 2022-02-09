import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { ArrayContext } from "../Context/ArrayContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { useState } from "react";

const ClearList = () => {
  const [btnHide, setBtnHide] = useState(false);
  const { array, updateArray } = useContext(ArrayContext);

  const clear = async () => {
    try {
      updateArray([]);
      AsyncStorage.removeItem("@storage_Array");
      console.log("List has been succesfully cleared");
    } catch (e) {
      console.log(e);
    }
  };

  const clearListAlert = () =>
    Alert.alert(
      "Clear list?",
      "Are you sure you want to clear the list,\ncontinue to clear the list",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Pressed => Clear list was cancelled"),
              setBtnHide(false);
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            clear();
            setBtnHide(false);
            console.log("OK Pressed => Clear list has been enforced");
          },
        },
      ]
    );

  return (
    <View style={styles.container}>
      {array !== null ? (
        <TouchableOpacity onPress={() => clearListAlert()}>
          <View style={styles.btnClear}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Clear List
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ClearList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5174A8",
    alignItems: "center",
    justifyContent: "center",
  },
  btnClear: {
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "purple",
    width: 100,
    borderRadius: 20,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 14,
  },
});
