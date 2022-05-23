import { useState } from "react";
import styled from "styled-components";

const TodoFormBlock = styled.div``;
const TodoFormTemplate = styled.form``;
const TodoInput = styled.input``;
const SubmitButton = styled.button``;

export function TodoForm({ todoItem, setTodoItem }) {
  const [inputText, setInputText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoItem([
      ...todoItem,
      {
        id: Math.random(),
        todo: inputText,
        isDone: false,
      },
    ]);
    setInputText("");
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <TodoFormBlock>
      <TodoFormTemplate onSubmit={onSubmit}>
        <TodoInput autoFocus onChange={onChange} value={inputText} />
        <SubmitButton type="submit">추가</SubmitButton>
      </TodoFormTemplate>
    </TodoFormBlock>
  );
}
