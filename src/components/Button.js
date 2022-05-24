import styled from "styled-components";

const DefaultButton = styled.button`
  padding: 0.3rem;
  margin-left: 0.3rem;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

export function Button({ buttonText, onClick }) {
  return <DefaultButton onClick={onClick}>{buttonText}</DefaultButton>;
}
