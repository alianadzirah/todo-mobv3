import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import Colors from "./Colors";

function TaskList(props) {
  const [isDone, setIsDone] = useState(props.tick);

  // function agreeHandler() {
  //   setAgree(!agree);
  // }
  // setAgree(props.agreeHandler);

  return (
    <View style={styles.taskBody}>
      <View style={styles.itemLeft}>
        <View style={styles.buttonDisplay}>
          {/* <View>
             <CheckBox
              style={styles.tickBox}
              value={agree}
              onValueChange={agreeHandler}
              color={agree ? "#ffaaaa" : undefined}
            /> 
          </View>*/}
          <Pressable
            onPress={() => { isDone ? 
              setIsDone(props.tick) : setIsDone(!props.tick);
            }}
          >
            <Ionicons
              name="checkbox"
              margin={5}
              size={25}
              color={Colors.primary500}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setIsDone(props.tick);
            }}
          >
            <Ionicons
              name="checkbox"
              margin={5}
              size={25}
              color={Colors.primary500}
            />
          </Pressable>
          <Text
            style={{
              textDecorationLine: isDone ? "line-through" : "none",
              fontSize: 24,
            }}
          >
            {props.text}
          </Text>
          {/* <Text style={styles.taskTitle}>{props.text}</Text> */}
        </View>

        <View style={styles.buttonDisplay}>
          <Pressable onPress={props.onTaskDone}>
            <Ionicons
              name="create"
              margin={5}
              size={25}
              color={Colors.primary500}
            />
          </Pressable>
          {/* <Pressable onPress={() => {props.onDeleteTask(); agree? this.agreeHandler(): setAgree(false);}}> */}
          <Pressable onPress={()=>{props.onDeleteTask(); setIsDone(props.tick)}}>
            <Ionicons
              name="trash-bin"
              margin={5}
              size={25}
              color={Colors.primary900}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  taskBody: {
    width: "90%",
    backgroundColor: Colors.primary700,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 22,
    color: Colors.primary600,
    // fontFamily: "open-sans",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickBox: {
    width: 25,
    height: 25,
    margin: 10,
  },
  buttonDisplay: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    alignItems: "center",
    color: "#ffaaaa",
  },
});
