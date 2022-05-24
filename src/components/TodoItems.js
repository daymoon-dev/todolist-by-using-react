import styled from "styled-components";
import { Button } from "./Button";

const TodoItem = styled.li`
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
    setTodoItem([...todoItem, (item.isDone = !item.isDone)]);
  };

  return todoItem
    .filter((item) => item.isDone === isDoneValue)
    .map((item) => {
      return !item.isDone ? (
        <TodoItem key={item.id}>
          {item.todo}
          <Button buttonText="삭제" onClick={() => deleteTodo(item.id)} />
          <Button buttonText="완료" onClick={() => isDoneHandler(item)} />
        </TodoItem>
      ) : (
        <TodoItem key={item.id}>
          {item.todo}
          <Button buttonText="되돌리기" onClick={() => isDoneHandler(item)} />
        </TodoItem>
      );
    });
}
