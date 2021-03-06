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
import SortComments from "../components/SortComments";
import CommentsList from "../components/CommentsList";
import CommentCard from "../components/CommentCard";
import AddComment from "../components/AddComment";
import CommentLogin from "../components/CommentLogin";
import Voter from "../components/Voter";
import Loader from "../components/Loader";

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

// <a>
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
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
  width: 320px;
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

// <Section>
export const StyledSortComments = styled(SortComments)`
  text-align: center;
  margin: 2em 1.5em 1.5em 1.5em;
`;

// <Form>
export const StyledAddComment = styled(AddComment)`
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
    margin-left: 0.5em;
    margin-right: 0.2em;
  }
`;

//<p>
export const StyledCommentLogin = styled(CommentLogin)`
  text-align: center;
`;

// <ul>
export const StyledCommentsList = styled(CommentsList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

// <li>
export const StyledCommentCard = styled(CommentCard)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  list-style-type: none;
  margin: 1em;
  padding: 1em;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.5);
  word-break: break-word;
`;

// <button>
export const StyledDeleteCommentButton = styled(StyledButton)`
  align-self: flex-end;
  background-color: white;
  color: blue;
  border-color: blue;

  &:hover {
    color: white;
    background-color: red;
    border-color: red;
  }
`;

export const StyledVoter = styled(Voter)`
  p {
    margin: 0.3em;
  }
`;

export const StyledVoteButton = styled(VoteButton)`
  height: 80px;
  width: 80px;
  background: ${(props) => (props.voted ? "grey" : "")};
`;

export const StyledLoader = styled(Loader)`
  text-align: center;
  border: 10px solid white;
  border-top: 10px solid blue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 1em auto;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
