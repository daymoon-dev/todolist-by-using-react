import { NavLink } from "react-router-dom";
import styled from "styled-components";
import routes from "../db/routes.json";

const Nav = styled.div`
  height: 50px;
  line-height: 50px;

  ul {
    list-style: none;
    padding: 0 15px;
    margin: 0;
  }

  li {
    float: right;
    margin-left: 15px;
  }
`;

const StyledLinked = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    color: lightgray;
  }
`;

const Home = styled(StyledLinked)`
  font-size: 1.3em;
  font-weight: 600;
`;

export function Navigation() {
  return (
    <Nav>
      <ul>
        <Home to="/">TODOLIST</Home>
        {routes.map((routes) => (
          <li key={routes.id}>
            <StyledLinked to={routes.path}>{routes.value}</StyledLinked>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
