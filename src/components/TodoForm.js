import { useState } from "react";
import styled from "styled-components";

const TodoFormBlock = styled.div`
  padding: 10px;
`;

const TodoFormTemplate = styled.form`
  width: 100%;
`;

const TodoInput = styled.input`
  width: 14em;
  padding: 0.3rem;
  background: black;
  color: white;
  font-size: 16px;
  text-align: center;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export function TodoForm({ todoItem, setTodoItem }) {
  const [inputText, setInputText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!inputText || !inputText.trim()) {
      alert("할 일을 입력해주세요.");
      return;
    }

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
        <TodoInput
          autoFocus
          placeholder="할 일 입력하고 Enter"
          onChange={onChange}
          value={inputText}
        />
        {/* <Button buttonText="추가" type="submit" /> */}
      </TodoFormTemplate>
    </TodoFormBlock>
  );
}
