import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import TaskList from "./components/TaskList";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./components/Colors";
import { useFonts } from "expo-font";

export default function App() {
  const [taskID, setTaskID] = useState(0);
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const [isDone, setIsDone] = useState(false);

  // useFonts({
  //   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  //   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  // });

  const addTaskHandler = () => {
    if (task === null) {
      Alert.alert("Empty Task", "Please insert task!", [
        { text: "NOTED", onPress: () => console.log("NOTED Pressed") },
      ]);
    } else {
      setTaskID(taskID + 1);
      setTaskItems((prevItem) => {
        return [...prevItem, { text: task, key: taskID, tick: isDone }];
      });
      setTask(null);
      console.log(taskItems);
    }
  };

  function tickHandler (updatedTick, key){
    console.log(taskItems.filter((key) => key.key !== key));
  }

  const taskEdit = () => {
    console.log('edit');
  };

  const taskDone = (key, tick) => {
    const newTask = taskItems.map(task => {
      if (task.key === key){
        return{
          ...task,
          tick: task.tick,
        }
      }
    });
    setTaskItems(newTask);


    setIsDone(true);
    console.log('done');
  };

  const deleteTask = (index) => {
    setTaskItems((prevTaskItems) => {
      return prevTaskItems.filter((id) => id.key != index);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To do list</Text>
      </View>
      <ScrollView>
        {/* all task list here */}
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TaskList
                key={index}
                text={item.text}
                tick={item.tick}
                onEditTask={()=> taskEdit(item.key)}
                onTaskDone={() => taskDone(item.key, item.tick)}
                onDeleteTask={() => deleteTask(item.key)}
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.addNewTask}>
        <TextInput
          style={styles.newTask}
          placeholder={"Add new task"}
          placeholderTextColor={"white"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <Pressable onPress={addTaskHandler} style={styles.addButton}>
          <Ionicons name="add" size={50} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  tasksWrapper: {
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
  },

  sectionTitle: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.primary600,
    // fontFamily: "open-sans",
  },

  items: {
    paddingTop: 15,
    alignContent: "center",
  },

  touchableOpacityStyle: {
    position: "absolute",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },

  newTask: {
    width: 270,
    borderRadius: 60,
    backgroundColor: Colors.primary800,
    marginVertical: 20,
    marginHorizontal: 10,
    paddingLeft: 30,
    fontSize: 24,
    // fontFamily: "open-sans",
  },

  addButton: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: Colors.primary800,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  addNewTask: {
    flexDirection: "row",
    paddingLeft: 5,
  },
});
