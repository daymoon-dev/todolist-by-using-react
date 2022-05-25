import styled from "styled-components";
import { Button } from "./Button";

const TodoItemBlock = styled.div`
  display: block;

  input {
    margin-right: 7px;
  }
`;

const TodoItem = styled.li`
  display: inline;
  font-size: 18px;
  vertical-align: auto;

  Button {
    margin-left: 5px;
    padding: 0.2rem;
  }

  &.Complete {
    text-decoration: line-through;
    opacity: 0.6;
  }
`;

export function TodoItems({ todoItem, setTodoItem, isDoneValue }) {
  const deleteTodo = (id) => {
    setTodoItem(todoItem.filter((m) => m.id !== id));
  };

  const isDoneHandler = (item) => {
    setTodoItem([...todoItem], (item.isDone = !item.isDone));
  };

  return todoItem
    .filter((item) => item.isDone === isDoneValue)
    .map((item) => {
      return !item.isDone ? (
        <TodoItemBlock key={item.id}>
          <input type="checkbox" onClick={() => isDoneHandler(item)} />
          <TodoItem>{item.todo}</TodoItem>
          <Button buttonText="&times;" onClick={() => deleteTodo(item.id)} />
        </TodoItemBlock>
      ) : (
        <TodoItemBlock key={item.id}>
          <TodoItem className={item.isDone && "Complete"}>{item.todo}</TodoItem>
          <Button buttonText="되돌리기" onClick={() => isDoneHandler(item)} />
        </TodoItemBlock>
      );
    });
}
