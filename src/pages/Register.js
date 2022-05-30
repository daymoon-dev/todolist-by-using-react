import styled from "styled-components";
import { Button } from "../components/Button";
import { DefaultInput } from "../components/Inputs";
import { MainTitle } from "../components/Titles";
import { TodoTemplate } from "../components/TodoTemplate";

export function Register() {
  const RegisterInput = styled(DefaultInput)`
    margin: 10px 0 20px 0;
  `;

  const onSubmit = () => {};

  return (
    <TodoTemplate>
      <MainTitle title="Register" />
      <DefaultInput autoFocus={true} placeholder="ID" />
      <RegisterInput type="password" placeholder="PASSWORD" />
      <Button buttonText="회원가입" onClick={onSubmit} />
    </TodoTemplate>
  );
}
