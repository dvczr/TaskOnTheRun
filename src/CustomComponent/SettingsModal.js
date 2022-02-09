import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ArrayContext } from "../Context/ArrayContext";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SettingsModal = () => {
  const [btnHide, setBtnHide] = useState(false);
  const { updateArray, setCounter } = useContext(ArrayContext);

  const reset = async () => {
    try {
      setCounter(0);
      updateArray([]);
      AsyncStorage.removeItem("@storage_Counter");
      AsyncStorage.removeItem("@storage_Array");
      console.log("Application has been succesfully reseted");
    } catch (e) {
      console.log(e);
    }
  };

  const resetAlert = () =>
    Alert.alert(
      "Reset application?",
      "Are you sure you want to reset the application to factory settings,\nyou will lose all current data!",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Pressed => Reset was cancelled"),
              setBtnHide(false);
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            reset();
            setBtnHide(false);
            console.log("OK Pressed => Reset has been enforced");
          },
        },
      ]
    );

  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={btnHide}>
        <TouchableWithoutFeedback
          onPress={() => {
            setBtnHide(false);
          }}
        >
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalView}>
                <View style={styles.boxText}>
                  <TouchableOpacity onPress={() => resetAlert()}>
                    <View style={styles.reset}>
                      <Text style={{ fontSize: 18, fontWeight: "700" }}>
                        Reset to factory settings
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setBtnHide(false)}>
                  <View style={styles.btnHideAbout}>
                    <View>
                      <Feather name="x-circle" size={24} color="black" />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.btnShowAbout}>
        <TouchableOpacity onPress={() => setBtnHide(true)}>
          <Ionicons name="md-cog-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnShowAbout: {
    alignSelf: "flex-end",
  },
  btnHideAbout: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {},
  boxText: {
    top: 0,
  },
  modalView: {
    backgroundColor: "rgba(144, 81, 125, 0.75)",
    borderRadius: 25,
    padding: 15,
    borderWidth: 3,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.75,
    shadowRadius: 7,
    elevation: 15,
  },
  reset: {
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "black",
    borderStyle: "dotted",
  },
});
