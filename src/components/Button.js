import styled from "styled-components";

const DefaultButton = styled.button`
  background: black;
  color: white;
  padding: 0.5em;
  margin-left: 0.3rem;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background: rgba(50, 50, 50);
  }
`;

export function Button({ buttonText, onClick }) {
  return <DefaultButton onClick={onClick}>{buttonText}</DefaultButton>;
}
