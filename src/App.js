import { TodoTemplate } from "./components/TodoTemplate";
import { Main } from "./components/Titles";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useState, useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/todoItems`)
      .then((response) => response.json())
      .then((data) => setTodoItems(data));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TodoTemplate>
            <Main title="TODOLIST" />
            <TodoForm todoItems={todoItems} setTodoItems={setTodoItems} />
            <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
          </TodoTemplate>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
