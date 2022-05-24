import styled from "styled-components";
import { Button } from "./Button";

const TodoItemBlock = styled.div`
  display: block;
`;

const TodoItem = styled.li`
  display: inline;
  font-size: 18px;

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
        <TodoItemBlock key={item.id}>
          <TodoItem>{item.todo}</TodoItem>
          <Button buttonText="삭제" onClick={() => deleteTodo(item.id)} />
          <Button buttonText="완료" onClick={() => isDoneHandler(item)} />
        </TodoItemBlock>
      ) : (
        <TodoItemBlock key={item.id}>
          <TodoItem className={item.isDone ? "Complete" : ""}>
            {item.todo}
          </TodoItem>
          <Button buttonText="되돌리기" onClick={() => isDoneHandler(item)} />
        </TodoItemBlock>
      );
    });
}
