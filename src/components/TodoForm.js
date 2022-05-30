import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { DefaultInput } from "./Inputs";

const TodoFormBlock = styled.div`
  padding: 10px;
`;

const TodoFormTemplate = styled.form`
  width: 100%;
`;

export function TodoForm({ todoItems, setTodoItems }) {
  const { value: todoInput, onChange, setValue: setTodoInput } = useInput();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!todoInput || !todoInput.trim()) {
      alert("할 일을 입력해주세요.");
      return;
    }

    fetch("http://localhost:3001/todoItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        todo: todoInput,
        isDone: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => setTodoItems([...todoItems, data]));

    setTodoInput("");
  };

  return (
    <TodoFormBlock>
      <TodoFormTemplate onSubmit={onSubmit}>
        <DefaultInput
          placeholder="할 일을 입력하세요."
          value={todoInput}
          onChange={onChange}
        />
      </TodoFormTemplate>
    </TodoFormBlock>
  );
}
