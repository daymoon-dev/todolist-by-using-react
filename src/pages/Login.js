import styled from "styled-components";
import { TodoTemplate } from "../components/TodoTemplate";
import { MainTitle } from "../components/Titles";
import { DefaultInput } from "../components/Inputs";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const PasswordInput = styled(DefaultInput)`
  margin: 10px 0 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const excuteLogin = (e) => {};

export function Login() {
  return (
    <TodoTemplate>
      <MainTitle title="Login" />
      <DefaultInput autoFocus={true} placeholder="ID" />
      <PasswordInput type="password" placeholder="PASSWORD" />
      <ButtonContainer>
        <Button buttonText="로그인" onClick={excuteLogin} />
        <Link to="/register">
          <Button buttonText="회원가입" />
        </Link>
      </ButtonContainer>
    </TodoTemplate>
  );
}
