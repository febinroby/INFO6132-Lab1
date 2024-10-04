import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleStatus, onDeleteTask }) => (
  <FlatList
    data={tasks}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TaskItem
        task={item}
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask}
      />
    )}
    contentContainerStyle={styles.list}
  />
);

const styles = StyleSheet.create({
  list: { paddingBottom: 16 },
});

export default TaskList;