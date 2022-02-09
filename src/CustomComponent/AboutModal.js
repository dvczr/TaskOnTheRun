import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const AboutModal_CC = () => {
  const [btnHide, setBtnHide] = useState(false);

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
                  <Text style={styles.modalText1}>
                    CrazyPony's{"\n"}brings u{"\n"}
                  </Text>
                  <Text style={styles.modalText2}>Task on the Run</Text>
                  <Text style={styles.modalText3}>by DVCZR</Text>
                </View>
                <TouchableOpacity onPress={() => setBtnHide(false)}>
                  <View style={styles.btnHideAbout}>
                    <View></View>
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
          <AntDesign name="infocirlce" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutModal_CC;

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
    marginTop: 55,
  },
  modalText1: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText2: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText3: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 5,
  },
  boxText: {
    top: 20,
  },
  modalView: {
    width: 240,
    height: 240,
    backgroundColor: "rgba(144, 81, 125, 0.75)",
    borderRadius: 1000,
    padding: 18,
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
    marginTop: 10,
    padding: 2,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 25,
    borderStyle: "dotted",
  },
});
