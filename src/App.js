import { createGlobalStyle } from "styled-components";
import { TodoTemplate } from "./components/TodoTemplate";
import { Titles, SubTitle } from "./components/Titles";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import todoItems from "./db/todoItems.json";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    margin: 50px auto;
  }
`;

function App() {
  const [todoItem, setTodoItem] = useState(todoItems.todoItems);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Titles title="TODOLIST" />
        <TodoForm todoItem={todoItem} setTodoItem={setTodoItem} />
        <TodoList todoItem={todoItem} setTodoItem={setTodoItem} />
      </TodoTemplate>
    </>
  );
}

export default App;
