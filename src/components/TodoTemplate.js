import styled from "styled-components";

const TodoTemplateBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 512px;
  background: lightgray;

  margin: 0 auto;
`;

export function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
