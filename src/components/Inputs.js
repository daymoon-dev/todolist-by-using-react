import styled from "styled-components";

const Input = styled.input`
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

export function DefaultInput({
  autoFocus,
  name,
  type,
  className,
  value,
  onChange,
  placeholder,
}) {
  return (
    <Input
      autoFocus={autoFocus}
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
