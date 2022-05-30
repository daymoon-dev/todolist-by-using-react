import styled from "styled-components";
import { SubTitle } from "./Titles";
import { TodoItems } from "./TodoItems";

const TodoListBlock = styled.div``;
const Todolist = styled.ul`
  padding: 0;
  text-align: center;
  list-style: none;
`;

export function TodoList({ todoItems, setTodoItems }) {
  const isViewSubTitle = (title, isDone) => {
    return (
      todoItems.filter((item) => item.isDone === isDone).length > 0 && (
        <SubTitle title={title} />
      )
    );
  };

  return (
    <TodoListBlock>
      <Todolist>
        {isViewSubTitle("진행중", false)}
        <TodoItems
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          isDoneValue={false}
        />
        {isViewSubTitle("완료", true)}
        <TodoItems
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          isDoneValue={true}
        />
      </Todolist>
    </TodoListBlock>
  );
}
