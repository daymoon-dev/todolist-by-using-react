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

  &:focus {
    outline: none;
  }
`;

export function TodoForm({ todoItems, setTodoItems }) {
  const [inputText, setInputText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!inputText || !inputText.trim()) {
      alert("할 일을 입력해주세요.");
      return;
    }

    fetch("http://localhost:3001/todoItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        todo: inputText,
        isDone: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => setTodoItems([...todoItems, data]));

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
