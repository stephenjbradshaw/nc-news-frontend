import styled from "styled-components";
import Header from "../components/Header";
import Login from "../components/Login";
import Nav from "../components/Nav";
import { Link } from "@reach/router";
import SortArticles from "../components/SortArticles";
import ArticleCard from "../components/ArticleCard";
import ArticlesList from "../components/ArticlesList";
import VoteButton from "../components/VoteButton";
import SingleArticleCard from "../components/SingleArticleCard";

export const AppTitle = styled.h1`
  text-align: center;
  margin: 0.3em;
`;

// <Header>
export const StyledHeader = styled(Header)`
  background-color: rgb(255, 255, 255);
  padding: 1em;
`;

// <p>
export const StyledLogin = styled(Login)`
  margin: 0;
  text-align: right;
  padding: 0.5em 0.5em 0em 0.5em;
`;

// <a>
export const StyledButton = styled(Link)`
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
`;

// <ul>
export const StyledNav = styled(Nav)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
  margin: 0px;
`;

// <section>
export const StyledSortArticles = styled(SortArticles)`
  text-align: center;
  margin: 1em;
`;

// <ul>
export const StyledArticlesList = styled(ArticlesList)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
`;

// <li>
export const StyledArticleCard = styled(ArticleCard)`
  max-width: 400px;
  min-width: 200px;
  list-style-type: none;
  text-align: center;
  margin: 1em;
  padding: 1em;

  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.5);
`;

// <Article>
export const StyledSingleArticleCard = styled(SingleArticleCard)`
  max-width: 80%;
  min-width: 200px;

  list-style-type: none;
  text-align: center;
  margin: 1em auto 1em auto;
  padding: 1em;

  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.5);
`;

export const StyledVoteButton = styled(VoteButton)`
  height: 80px;
  width: 80px;
  background: ${(props) => (props.voted ? "grey" : "")};
`;
