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
      <div>
        <span>로그인</span>
        <span>로그아웃</span>
        <span>회원가입</span>
      </div>
      <TodoTemplate>
        <Main title="TODOLIST" />
        <TodoForm todoItem={todoItem} setTodoItem={setTodoItem} />
        <TodoList todoItem={todoItem} setTodoItem={setTodoItem} />
      </TodoTemplate>
    </>
  );
}

export default App;
