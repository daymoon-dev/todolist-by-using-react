import styled from "styled-components";

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
              <button onClick={() => deleteTodo(item.id)}>삭제</button>
              <button onClick={() => isDoneHandler(item)}>완료</button>
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
              <button onClick={() => isDoneHandler(doneItem)}>되돌리기</button>
            </TodoItem>
          ))}
      </Todolist>
    </TodoListBlock>
  );
}
