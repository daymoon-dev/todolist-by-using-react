import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  li {
    margin: 0 15px 5px 0px;
  }
`;

const routes = [
  {
    id: 1,
    path: "login",
    value: "로그인",
  },
  {
    id: 2,
    path: "register",
    value: "회원가입",
  },
];

export function Navigation() {
  return (
    <Nav>
      <ul>
        {routes.map((routes) => (
          <li key={routes.id}>
            <NavLink to={routes.path}>{routes.value}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </Nav>
  );
}
