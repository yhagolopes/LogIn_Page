import styled from "styled-components";
import { Link } from "react-router-dom";

export const Back = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;

  height: 1em;

  font-size: 2rem;
  color: var(--color-w2);

  &:hover {
    color: var(--color-w1);
  }

  &:active {
    outline: 2px solid var(--color-w2);
  }

  @media (prefers-color-scheme: light) {
    color: var(--color-b2);

    &:hover {
      color: var(--color-b1);
    }

    &:active {
      outline: 2px solid var(--color-b2);
    }
  }
`;

export const SmallLink = styled(Link)`
  margin: 2px 0;

  display: inline-block;
  color: var(--color-link);
  font-size: 1rem;

  &:active {
    color: var(--color-link2);
  }

  @media (prefers-color-scheme: light) {
    color: var(--color-link2);

    &:active {
      color: var(--color-link);
    }
  }
`;

export const Credits = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;

  font-size: 0.9rem;
`;

export const Text = styled.span`
  display: inline-block;

  font-size: 1.5rem;
  color: var(--color-w2);

  @media (prefers-color-scheme: light) {
    color: var(--color-b2);
  }
`;

export const Input = styled.input`
  background: var(--color-b3);
  color: var(--color-w1);
  font-size: 1.2rem;

  width: 100%;
  height: 4rem;
  border-radius: 36px;
  padding: 0 0.7rem;

  &:focus {
    outline: 2px solid var(--color-w3);
  }

  @media (prefers-color-scheme: light) {
    background: var(--color-w3);
    color: var(--color-b1);

    &:focus {
      outline: 2px solid var(--color-b3);
    }
  }
`;

export const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
