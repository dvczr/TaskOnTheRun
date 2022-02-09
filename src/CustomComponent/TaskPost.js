import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ArrayContext } from "../Context/ArrayContext";

import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const TaskPost = ({ item, index }) => {
  const { array, updateArray } = useContext(ArrayContext);

  const dlt = () => {
    console.log(
      "dltTask(index: " +
        JSON.stringify(index) +
        " of " +
        (array.length - 1) +
        ") => TASK HAS BEEN DELETED"
    );
    let a = array;
    a.splice(index, 1);
    updateArray([...a]);
  };

  const storeData = async () => {
    try {
      const jsonArray = JSON.stringify(array);
      await AsyncStorage.setItem("@storage_Array", jsonArray);
      console.log("AsyncStorage => Data has been removed from storage");
    } catch (e) {
      console.error("ERROR: storeData() has failed to save data => " + e);
    }
  };

  const dltTask = () =>
    Alert.alert(
      "Delete task?",
      "Are you sure you want to delete this task,\ncontinue to delete the task!",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Pressed => Delete task was cancelled");
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dlt();
            storeData();
            console.log("OK Pressed => Delete task has been enforced");
          },
        },
      ]
    );

  return (
    <View style={styles.container}>
      <View style={styles.boxTaskInput} key={item.id}>
        <View style={styles.boxTextInput}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.fontTitle}>
              <Text style={styles.fontTitle}>{item.title}</Text>
            </View>
            <View style={styles.boxAddBtn}>
              <TouchableOpacity
                onPress={() => {
                  dltTask();
                }}
              >
                <AntDesign name="delete" size={27} color={"black"} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableWithoutFeedback
              onPress={() =>
                console.log(
                  "Pressed at Task #" +
                    item.id +
                    "(ID) => index: " +
                    index +
                    ", title: " +
                    item.title +
                    ", task: " +
                    item.task
                )
              }
            >
              <Text style={styles.fontTask}>{item.task}</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(178, 177, 207, 1)",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  boxTaskInput: {
    flexDirection: "row",
    height: 115,
    width: 320,
    borderRadius: 4,
    backgroundColor: "rgba(184, 217, 244, 0.65)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 17,
  },
  boxTextInput: {
    height: 101,
    width: 306,
    marginVertical: 7,
    marginLeft: 7,
  },
  fontTitle: {
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(237, 246, 252, 0.45)",
    fontSize: 17,
    fontWeight: "bold",
    width: 272,
    height: 30,
    padding: 2,
    borderColor: "rgba(0, 0, 0, 0.15)",
    lineHeight: 28,
  },
  fontTask: {
    color: "black",
    backgroundColor: "rgba(237, 246, 252, 0.65)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    width: 306,
    height: 66,
    padding: 2,
    marginTop: 5,
    lineHeight: 20,
  },
  boxAddBtn: {
    borderRadius: 25,
    marginTop: 1,
    marginLeft: 5,
  },
});
