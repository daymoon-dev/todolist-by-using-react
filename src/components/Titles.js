import styled from "styled-components";

const Main = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Sub = styled.h2`
  margin-bottom: 10px;
`;

export const MainTitle = ({ title }) => {
  return <Main>{title}</Main>;
};

export const SubTitle = ({ title }) => {
  return <Sub>{title}</Sub>;
};
