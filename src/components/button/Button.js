import styled from "styled-components";

const DefaultButton = styled.button``;

export function Button({ buttonText }) {
  return <DefaultButton>{buttonText}</DefaultButton>;
}
