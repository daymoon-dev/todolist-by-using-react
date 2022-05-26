import { TodoTemplate } from "./components/TodoTemplate";
import { Main } from "./components/Titles";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useFetch } from "./hooks/useFetch";

function App() {
  const todoItem = useFetch("http://localhost:3001/todoItems");

  return (
    <>
      <TodoTemplate>
        <Main title="TODOLIST" />
        <TodoForm todoItem={todoItem} />
        <TodoList todoItem={todoItem} />
      </TodoTemplate>
    </>
  );
}

export default App;
