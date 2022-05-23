import styled from "styled-components";

import { Button } from "./button/Button";

const TodoListBlock = styled.div``;
const Todolist = styled.ul`
  list-style: none;
`;

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

export function TodoList({ todoItem, setTodoItem }) {
  const todoItems = (isDoneValue) => {
    return todoItem
      .filter((item) => item.isDone === isDoneValue)
      .map((item) => (
        <TodoItem key={item.id}>
          {item.todo}
          {/* <button onClick={() => editHandler(item)}>수정</button> */}
          <Button buttonText="삭제" onClick={() => deleteTodo(item.id)} />
          <Button buttonText="완료" onClick={() => isDoneHandler(item)} />
        </TodoItem>
      ));
  };

  const deleteTodo = (id) => {
    setTodoItem(todoItem.filter((m) => m.id !== id));
  };

  const isDoneHandler = (item) => {
    setTodoItem([...todoItem, (item.isDone = !item.isDone)]);
  };

  return (
    <TodoListBlock>
      <Todolist>
        <h3>진행중</h3>
        {todoItems(false)}
      </Todolist>

      <Todolist>
        <h3>완료</h3>
        {todoItems(true)}
      </Todolist>
    </TodoListBlock>
  );
}
