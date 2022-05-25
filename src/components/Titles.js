import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  margin-bottom: 10px;
`;

export const Main = ({ title }) => {
  return <MainTitle>{title}</MainTitle>;
};

export const Sub = ({ title }) => {
  return <SubTitle>{title}</SubTitle>;
};
