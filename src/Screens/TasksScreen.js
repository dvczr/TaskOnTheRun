import { Platform, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ArrayContext } from "../Context/ArrayContext";
import TaskPost from "../CustomComponent/TaskPost";
import EmptyList from "../CustomComponent/EmptyList";
import ClearList from "../CustomComponent/ClearList";

const TasksScreen = () => {
  const { array } = useContext(ArrayContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        ListEmptyComponent={<EmptyList />}
        ListFooterComponent={array.length !== 0 ? <ClearList /> : null}
        // keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TaskPost index={index} item={item} key={item.id} />
        )}
      />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5174A8",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 95 : 80,
  },
});
