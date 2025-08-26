import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newtodo, setNewTodo] = useState("");

  // Save todos to localStorage whenever they change
  const saveTodos = (updatedTodos) => {
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const addTodo = () => {
    if (newtodo.trim() === "") return;
    const updatedTodos = [
      ...todos,
      { task: newtodo, id: uuidv4(), isDone: false },
    ];
    saveTodos(updatedTodos);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(updatedTodos);
  };

  const updateTodo = (id) => {
    const newTask = prompt("Enter updated task:");
    if (newTask && newTask.trim() !== "") {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      saveTodos(updatedTodos);
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    saveTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center min-h-screen p-4 sm:p-10 ">
      <div className="text-center bg-gray-100 w-full max-w-xl rounded-xl p-6 mx-auto shadow-md">
        <h1 className="font-bold text-3xl mb-5">Todo Lists</h1>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center mb-6 w-full gap-2">
          <input
            type="text"
            value={newtodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full sm:w-2/3"
            placeholder="Enter a task..."
          />
          <button
            onClick={addTodo}
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition"
          >
            Add
          </button>
        </div>

        {/* Todo Items */}
        <div className="flex flex-col items-center space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-col sm:flex-row justify-between items-center w-full bg-gray-200 rounded-xl px-4 py-3 gap-2"
            >
              <p
                className={`cursor-pointer text-center sm:text-left text-lg ${
                  todo.isDone ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.task}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => updateTodo(todo.id)}
                  className="bg-black text-white rounded-lg px-3 py-1 hover:bg-gray-800 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-black text-white rounded-lg px-3 py-1 hover:bg-gray-800 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
