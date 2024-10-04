import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if(title.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(), 
        title, 
        status: false
      }]);
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: !task.status} : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleStatus={toggleTaskStatus} onDeleteTask={deleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
