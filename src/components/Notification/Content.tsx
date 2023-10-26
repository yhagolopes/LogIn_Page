import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { Text } from "../../global-css";

const Container = styled.div`
  position: relative;
  margin: 0 4px;
`;

const Author = styled(Text)`
  font-size: 1.2rem;
  font-weight: 700;

  display: block;
`;

const Message = styled(Text)`
  font-size: 1rem;
  display: block;
  word-wrap: break-word;
`;

const ContentLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

interface IContent {
  author: string;
  message: string;
  link?: string;
}
export const Content = ({ author, message, link }: IContent) => {
  return (
    <Container>
      <Author>{author}</Author>
      <Message>{message}</Message>

      {link !== undefined ? <ContentLink to={link}></ContentLink> : <></>}
    </Container>
  );
};
