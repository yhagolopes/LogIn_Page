import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 4rem 1fr;

  width: 100%;
  height: 5rem;
  margin: 1rem 0;

  overflow: hidden;

  background: var(--color-b3);

  & > img {
    margin: auto;
  }
`;

interface IRoot {
  children: ReactNode;
}
export const Root = ({ children }: IRoot) => {
  return <Container>{children}</Container>;
};
