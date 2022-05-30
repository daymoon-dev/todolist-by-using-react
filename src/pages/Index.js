import { useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { TodoTemplate } from "../components/TodoTemplate";
import { MainTitle } from "../components/Titles";

export function Index() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/todoItems`)
      .then((response) => response.json())
      .then((data) => setTodoItems(data));
  }, []);

  return (
    <TodoTemplate>
      <MainTitle title="TODOLIST" />
      <TodoForm todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
    </TodoTemplate>
  );
}
