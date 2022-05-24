import styled from "styled-components";
import { Sub } from "./Titles";
import { TodoItems } from "./TodoItems";

const TodoListBlock = styled.div``;
const Todolist = styled.ul`
  padding: 0;
  text-align: center;
  list-style: none;
`;

export function TodoList({ todoItem, setTodoItem }) {
  return (
    <TodoListBlock>
      <Todolist>
        <Sub title="진행중"></Sub>
        <TodoItems
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          isDoneValue={false}
        />
        <Sub title="완료"></Sub>
        <TodoItems
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          isDoneValue={true}
        />
      </Todolist>
    </TodoListBlock>
  );
}
