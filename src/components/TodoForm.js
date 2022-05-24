import { useState } from "react";
import styled from "styled-components";

import { Button } from "./Button";

const TodoFormBlock = styled.div``;
const TodoFormTemplate = styled.form``;
const TodoInput = styled.input``;

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
        <Button buttonText="추가" type="submit"></Button>
      </TodoFormTemplate>
    </TodoFormBlock>
  );
}
