"use client";

import React, { useState } from "react";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function addTodo(todo) {

    // add this so that user cannot input nothing

    if (todo != "") {
      const newTodo = {
        id: Math.random(),
        todo: todo,
      };

      setList([...list, newTodo]);
      setInput("");
    }
  }

  function deleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
    <div>
      <h2>To do list</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              onClick={() => deleteTodo(todo.id)}
            />
            <label htmlFor={todo.id}>{todo.todo}</label>
          </div>
        ))}
      </ul>
    </div>
  );
}
