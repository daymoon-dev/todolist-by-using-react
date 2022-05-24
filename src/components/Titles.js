import styled from "styled-components";

const MainTitle = styled.h1``;

export const Titles = ({ title }) => {
  return <MainTitle>{title}</MainTitle>;
};

export const SubTitle = ({ title }) => {
  return <h3>{title}</h3>;
};
