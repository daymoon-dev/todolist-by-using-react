import styled from "styled-components";

const TodoTemplateBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 512px;
  height: auto;
  padding: 1em 0 4em 0;

  border: 1px solid lightgrey;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(230, 230, 230, 0.2);
`;

export function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
