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
  const isViewSubTitle = (title, isDone) => {
    return (
      todoItem.filter((item) => item.isDone === isDone).length > 0 && (
        <Sub title={title} />
      )
    );
  };

  return (
    <TodoListBlock>
      <Todolist>
        {isViewSubTitle("진행중", false)}
        <TodoItems
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          isDoneValue={false}
        />
        {isViewSubTitle("완료", true)}
        <TodoItems
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          isDoneValue={true}
        />
      </Todolist>
    </TodoListBlock>
  );
}
