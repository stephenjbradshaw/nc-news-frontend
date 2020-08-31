import styled from "styled-components";

export const VoteButton = styled.button`
  background: ${(props) => (props.voted ? "grey" : "")};
`;
