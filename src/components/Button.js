import styled from "styled-components";

const DefaultButton = styled.button``;

export function Button({ buttonText, onClick }) {
  return <DefaultButton onClick={onClick}>{buttonText}</DefaultButton>;
}
