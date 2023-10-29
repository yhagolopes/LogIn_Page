import styled from "styled-components";
import { ReactNode, MouseEvent } from "react";

import { FaLongArrowAltRight } from "react-icons/fa";

import { BaseDiv, IconLink, SmallError } from "../../global-css";

const Container = styled(BaseDiv)`
  width: 25rem;
  min-height: 5rem;

  padding: 10px 1.8rem;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

const Access = styled(IconLink)`
  position: static;
  font-size: 2rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
`;

interface IForm {
  children: ReactNode;
  error: string;
  link: string;
  sendAction: (event: MouseEvent) => void;
}
export const Form = ({ children, error, link, sendAction }: IForm) => {
  return (
    <Container>
      {children}
      <Flex>
        <SmallError>{error}</SmallError>
        <Access to={link} title="Access" onClick={sendAction}>
          <FaLongArrowAltRight />
        </Access>
      </Flex>
    </Container>
  );
};
