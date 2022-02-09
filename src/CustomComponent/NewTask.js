import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useState } from "react";

import { ArrayContext } from "../Context/ArrayContext";

import { MaterialIcons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [btnColor, setBtnColor] = useState("rgba(163, 20, 32, 1)");
  const { array, updateArray, counter, setCounter } = useContext(ArrayContext);

  useEffect(() => {
    getData();
  }, []);

  function AddNewTask() {
    if (task.length > 0 && title.length > 0) {
      updateArray([
        ...array,
        {
          title: title,
          task: task,
          id: idCounter(),
        },
      ]);

      console.log(
        "New task added => TITLE: " + title + ", " + "TASKINPUT: " + task
      );
      setBtnColor("rgba(163, 20, 32, 1)");
      setTask("");
      setTitle("");
    }
  }

  const storeData = async () => {
    try {
      const jsonCounter = await JSON.stringify(counter);
      const jsonArray = await JSON.stringify(array);
      await AsyncStorage.setItem("@storage_Counter", jsonCounter);
      await AsyncStorage.setItem("@storage_Array", jsonArray);
      console.log("AsyncStorage => New data has been added");
    } catch (e) {
      console.log("ERROR: storeData() has failed to save data => " + e);
    }
  };

  const getData = async () => {
    try {
      const jsonArray = await AsyncStorage.getItem("@storage_Array");
      const jsonCounter = await AsyncStorage.getItem("@storage_Counter");
      if (jsonArray != null) updateArray(JSON.parse(jsonArray));
      if (jsonCounter != null) setCounter(JSON.parse(jsonCounter));
      console.log("AsyncStorage => Has succesfully been fetched");
    } catch (e) {
      console.log("ERROR: getData() has failed to fetched data => " + e);
    }
  };

  function ColorCheckTitle(value) {
    setTitle(value);
    if (value.length > 0 && task.length > 0) {
      setBtnColor("rgba(108, 255, 92, 0.9)");
    } else {
      setBtnColor("rgba(163, 20, 32, 1)");
    }
  }
  function ColorCheckTask(value) {
    setTask(value);
    if (value.length > 0 && title.length > 0) {
      setBtnColor("rgba(108, 255, 92, 0.9)");
    } else {
      setBtnColor("rgba(163, 20, 32, 1)");
    }
  }

  function idCounter() {
    setCounter(counter + 1);
    return counter;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.boxTaskInput}>
            <View style={styles.boxTextInput}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View>
                  <TextInput
                    style={styles.fontTaskTitle}
                    placeholder="Give you're task a title!"
                    // placeholderTextColor="rgba(120, 81, 169, 1)"
                    value={title}
                    multiline={true}
                    maxLength={25}
                    textAlignVertical="top"
                    keyboardAppearance="dark"
                    onChangeText={(value) => {
                      ColorCheckTitle(value);
                    }}
                  />
                </View>
                <View style={styles.boxAddBtn}>
                  <TouchableOpacity
                    onPress={() => {
                      storeData();
                    }}
                    onPressIn={() => {
                      AddNewTask();
                    }}
                  >
                    <MaterialIcons name="add-task" size={27} color={btnColor} />
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                style={styles.fontTaskInput}
                placeholder="Type you're new task here..."
                // placeholderTextColor="rgba(120, 81, 169, 1)"
                value={task}
                multiline={true}
                maxLength={100}
                keyboardAppearance="dark"
                onChangeText={(value) => {
                  ColorCheckTask(value);
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5174A8",
    alignItems: "center",
    justifyContent: "center",
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
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 17,
  },
  boxTextInput: {
    height: 101,
    width: 306,
    marginVertical: 7,
    marginLeft: 7,
  },
  fontTaskTitle: {
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(237, 246, 252, 0.65)",
    fontSize: 17,
    fontWeight: "bold",
    width: 272,
    height: 30,
    borderRadius: 2,
    padding: 2,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  fontTaskInput: {
    color: "black",
    backgroundColor: "rgba(237, 246, 252, 0.65)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    textAlignVertical: "top",
    borderStyle: "dashed",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 2,
    width: 306,
    height: 66,
    borderRadius: 4,
    padding: 2,
    marginTop: 5,
  },
  boxAddBtn: {
    borderRadius: 25,
    marginTop: 2,
    marginLeft: 5,
  },
});
