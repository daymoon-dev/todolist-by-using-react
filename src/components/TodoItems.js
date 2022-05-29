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
  line-height: 1.8em;

  &.complete {
    text-decoration: line-through;
    opacity: 0.6;
  }
`;

export function TodoItems({ todoItems, setTodoItems, isDoneValue }) {
  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/todoItems/${id}`, {
      method: "DELETE",
    }).then(setTodoItems(todoItems.filter((item) => item.id !== id)));
  };

  const isDoneHandler = (item) => {
    fetch(`http://localhost:3001/todoItems/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        todo: item.todo,
        isDone: !item.isDone,
      }),
    })
      .then((response) => response.json())
      .then(setTodoItems([...todoItems], (item.isDone = !item.isDone)));
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

  return todoItems
    .filter((item) => item.isDone === isDoneValue)
    .map((item) => {
      return !item.isDone ? todoItemBlock(item) : todoItemBlock(item);
    });
}
