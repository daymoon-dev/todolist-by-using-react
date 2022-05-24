import styled from "styled-components";
import { SubTitle } from "./Titles";
import { TodoItems } from "./TodoItems";

const TodoListBlock = styled.div``;
const Todolist = styled.ul`
  list-style: none;
`;

export function TodoList({ todoItem, setTodoItem }) {
  return (
    <TodoListBlock>
      <Todolist>
        <SubTitle title="진행중"></SubTitle>
        <TodoItems
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          isDoneValue={false}
        />
      </Todolist>

      <Todolist>
        <SubTitle title="완료"></SubTitle>
        <TodoItems
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          isDoneValue={true}
        />
      </Todolist>
    </TodoListBlock>
  );
}
