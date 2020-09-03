import styled from "styled-components";
import Header from "../components/Header";
import Login from "../components/Login";
import Nav from "../components/Nav";

export const StyledHeader = styled(Header)`
  background-color: rgb(255, 255, 255);
  padding: 1em;
  h1 {
    text-align: center;
    margin: 0.3em;
  }
`;

export const StyledLogin = styled(Login)`
  margin: 0;
  text-align: right;
  padding: 0.5em 0.5em 0em 0.5em;

  button {
    font-size: 11pt;
    background-color: white;
    color: blue;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 0.3rem;
    margin: 0.1rem;
    text-decoration: none;
    &:hover {
      color: white;
      background-color: blue;
    }
  }
`;

export const StyledNav = styled(Nav)`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px;
    margin: 0px;
  }

  a {
    font-size: 11pt;
    background-color: white;
    color: blue;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 0.3rem;
    margin: 0.1rem;
    text-decoration: none;
    &:hover {
      color: white;
      background-color: blue;
    }
  }
`;

export const VoteButton = styled.button`
  background: ${(props) => (props.voted ? "grey" : "")};
`;
