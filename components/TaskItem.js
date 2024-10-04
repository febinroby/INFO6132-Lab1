import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TaskItem = ({ task, onToggleStatus, onDeleteTask }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.title}</Text>
      <Switch
        value={task.status}
        onValueChange={() => onToggleStatus(task.id)}
      />
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Ionicons name="trash-outline" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8 
  },
  taskText: { flex: 1 },
});

export default TaskItem;