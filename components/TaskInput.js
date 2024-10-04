import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    onAddTask(taskTitle);
    setTaskTitle('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} disabled={!taskTitle.trim()} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8 
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    marginRight: 8
  },
});

export default TaskInput;