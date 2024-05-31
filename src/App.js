import "./App.css";
import Header from "./myCompnents/Header";
import Todos from "./myCompnents/Todos";
import Footer from "./myCompnents/Footer";
import AddTodo from "./myCompnents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("adding todo", title, desc);
    let srno = todos.length > 0 ? todos[todos.length - 1].srno + 1 : 1;
    const newTodo = {
      srno: srno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
