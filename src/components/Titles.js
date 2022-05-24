import styled from "styled-components";

const MainTitle = styled.h1``;

export const Main = ({ title }) => {
  return <MainTitle>{title}</MainTitle>;
};

export const Sub = ({ title }) => {
  return <h3>{title}</h3>;
};
