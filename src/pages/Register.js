import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { DefaultInput } from "../components/Inputs";
import { MainTitle } from "../components/Titles";
import { TodoTemplate } from "../components/TodoTemplate";

const RegisterInput = styled(DefaultInput)`
  margin: 10px 0 20px 0;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export function Register() {
  const [inputText, setInputText] = useState({ email: "", password: "" });
  const { email, password } = inputText;

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    fetch(`http://localhost:3002/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify({
        ...inputText,
        [name]: value,
      }),
    })
      .then(() => {
        setInputText({ email: "", password: "" });
      })
      .catch((error) => console.error("Unable Regist Account", error));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputText({
      ...inputText,
      [name]: value,
    });
  };

  return (
    <TodoTemplate>
      <MainTitle title="Register" />
      <RegisterForm onSubmit={onSubmit}>
        <DefaultInput
          autoFocus={true}
          name="email"
          placeholder="ID"
          value={email}
          onChange={onChange}
        />
        <RegisterInput
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={password}
          onChange={onChange}
        />
        <Button buttonText="회원가입" />
      </RegisterForm>
    </TodoTemplate>
  );
}
