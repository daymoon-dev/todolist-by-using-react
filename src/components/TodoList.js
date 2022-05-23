import styled from "styled-components";

import { Button } from "./button/Button";

const TodoListBlock = styled.div``;
const Todolist = styled.ul`
  list-style: none;
`;

const TodoItem = styled.li`
  button {
    margin-left: 5px;
  }

  &.Complete {
    text-decoration: line-through;
    opacity: 0.6;
  }
`;

export function TodoList({ todoItem, setTodoItem }) {
  const deleteTodo = (id) => {
    setTodoItem(todoItem.filter((m) => m.id !== id));
  };
  console.log(todoItem);

  const isDoneHandler = (item) => {
    setTodoItem([...todoItem, (item.isDone = !item.isDone)]);
  };

  return (
    <TodoListBlock>
      <Todolist>
        <h2>진행중</h2>
        {todoItem
          .filter((item) => item.isDone === false)
          .map((item) => (
            <TodoItem key={item.id}>
              {item.todo}
              {/* <button onClick={() => editHandler(item)}>수정</button> */}
              <Button
                buttonText="삭제"
                onClick={() => deleteTodo(item.id)}
              ></Button>
              <Button
                buttonText="완료"
                onClick={() => isDoneHandler(item)}
              ></Button>
            </TodoItem>
          ))}
      </Todolist>

      <Todolist>
        <h2>완료</h2>
        {todoItem
          .filter((doneItem) => doneItem.isDone === true)
          .map((doneItem) => (
            <TodoItem
              className={`${todoItem.isDone ?? "Complete"}`}
              key={doneItem.id}
            >
              {doneItem.todo}
              <Button
                buttonText="되돌리기"
                onClick={() => isDoneHandler(doneItem)}
              ></Button>
            </TodoItem>
          ))}
      </Todolist>
    </TodoListBlock>
  );
}
