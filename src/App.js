import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = () => {
    if (task.trim() !== '') {
      if (selectedTodo !== null) {
        const updatedTodos = [...todos];
        updatedTodos[selectedTodo] = task;
        setTodos(updatedTodos);
        setSelectedTodo(null);
      } else {
        setTodos([...todos, task]);
      }
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setSelectedTodo(index);
    setTask(todos[index]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>
          {selectedTodo !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
