import { TodoTemplate } from "./components/TodoTemplate";
import { Main } from "./components/Titles";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import todoItems from "./db/todoItems.json";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState(todoItems.todoItems);

  return (
    <>
      <TodoTemplate>
        <Main title="TODOLIST" />
        <TodoForm todoItem={todoItem} setTodoItem={setTodoItem} />
        <TodoList todoItem={todoItem} setTodoItem={setTodoItem} />
      </TodoTemplate>
    </>
  );
}

export default App;
