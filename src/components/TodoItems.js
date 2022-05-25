import styled from "styled-components";
import { Button } from "./Button";

const TodoItemBlock = styled.div`
  display: block;

  input {
    margin-right: 7px;
  }

  Button {
  }
`;

const TodoItem = styled.li`
  display: inline;
  font-size: 18px;
  vertical-align: auto;
  line-height: 1.8em;

  &.complete {
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

  const onChange = (e) => {};

  const todoItemBlock = (item) => {
    return (
      <TodoItemBlock key={item.id}>
        <input
          type="checkbox"
          checked={item.isDone}
          onClick={() => isDoneHandler(item)}
          onChange={onChange}
        />
        <TodoItem className={item.isDone ? "item complete" : "item"}>
          {item.todo}
        </TodoItem>
        <Button buttonText="&times;" onClick={() => deleteTodo(item.id)} />
      </TodoItemBlock>
    );
  };

  return todoItem
    .filter((item) => item.isDone === isDoneValue)
    .map((item) => {
      return !item.isDone ? todoItemBlock(item) : todoItemBlock(item);
    });
}
