import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleAddTask = () => {
    if (task.trim() === '') return;

    setTasks([...tasks, { id: Date.now(), title: task, completed: false }]);
    setTask('');
  };

  const handleToggleTask = id => {
    const updatedTasks = tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = id => {
    const updatedTasks = tasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditTask = (id, newTitle) => {
    const updatedTasks = tasks.map(t =>
      t.id === id ? { ...t, title: newTitle } : t
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleToggleTask(item.id)}>
      <View style={[styles.taskItem, item.completed && styles.completedTask]}>
        <TextInput
          style={[styles.taskTitle, item.completed && styles.completedTitle]}
          value={item.title}
          onChangeText={newTitle => handleEditTask(item.id, newTitle)}
          editable={!item.completed}
        />
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search tasks"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <FlatList
        style={styles.list}
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // Black color
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000', // Black color
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000', // Black color
  },
  list: {
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    color: '#000', // Black color
  },
  completedTask: {
    backgroundColor: '#ccc',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});

export default App;
