import styled from "styled-components";

import { AiTwotoneEdit } from "react-icons/ai";

import { SmallText, IconLink } from "../../global-css";

const Container = styled.div<{ $width: string; $height: string }>`
  background: var(--color-b3);

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  border-radius: 36px;
  margin: 12px 0;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4rem;
`;

const AnimatedText = styled.div`
  padding-left: 1rem;
  overflow: hidden;

  & > span {
    width: 100%;
    animation: walk-animation 5s linear infinite;
  }
`;

const Edit = styled(IconLink)`
  position: static;
  margin: auto;

  font-size: 2rem;
`;

interface ILabel {
  text: string;
  width?: string;
  height?: string;
  link?: string;
}
export const Label = ({
  text,
  width = "22rem",
  height = "3.2rem",
  link,
}: ILabel) => {
  return (
    <Container $width={width} $height={height}>
      <AnimatedText>
        <SmallText>{text}</SmallText>
      </AnimatedText>

      {link !== undefined ? (
        <Edit to={link} title="Edit">
          <AiTwotoneEdit />
        </Edit>
      ) : (
        <></>
      )}
    </Container>
  );
};
