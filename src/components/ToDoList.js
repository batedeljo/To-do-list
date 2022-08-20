import React, { useState } from "react";
import ToDoForms from "./ToDoForms";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo=> todo.id !== id)
    setTodos(removeArr)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setTodos(prev=>prev.map(item=>(item.id === todoId ? newValue : item)))
  }

  const completeTodo = id => {
    let updateTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos)
  };

  return (
    <div>
      <h1>What's the plan for Today?</h1>
      <ToDoForms onSubmit={addToDo} />
      <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default ToDoList;
