// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { themes } from "./src/constants/themes/index";
import { List, Modal } from "./src/components/index";


export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [operator, setOperator] = useState('');

  const onHandleInput = (text) => {
    setTask(text);
  };

  const onHandleSubmit = () => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random(), value: task, done: false },
    ]);
    setTask("");
  };

  const onHandlePress = (itemSelected) => {
    switch (operator) {
      case 'done':  tasks.find(task => task.id === itemSelected.id).done = !tasks.find(task => task.id === itemSelected.id).done;
                    setTasks([...tasks]);
                    break;
      case 'edit':  tasks.find(task => task.id === itemSelected.id).value = task;
                    setTasks([...tasks]);
                    setTask("");
                    break;
      case 'delete':  setTasks((currentTasks) =>
                        currentTasks.filter((task) => task.id !== itemSelected.id)
                      );
                      break;
    }
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const handleModal = (id, operator) => {
    setItemSelected(tasks.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
    setOperator(operator);
  };

  return (
    <View style={themes.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.textInput}
          placeholder="add new task"
          value={task}
          onChangeText={onHandleInput}
        />
        <Button
          title="ADD"
          color="#8CBCB9"
          onPress={() => onHandleSubmit()}
          disabled={task.length === 0}
        />
      </View>
      <List 
        tasks={tasks}
        onPressItem={handleModal}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>{operator} Item</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalText}>Are you sure you want to {operator} this item?</Text>
          {
            (operator === 'edit')
            ? <TextInput
                style={styles.textInput}
                placeholder={itemSelected.value}
                value={task}
                onChangeText={onHandleInput}
              />
            : <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          }

          <Button title="Okay" onPress={() => onHandlePress(itemSelected)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTask: {
    marginTop: 40,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#8CBCB9",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "60%",
    height: 40,
    fontSize: 14,
    color: "#212121",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
