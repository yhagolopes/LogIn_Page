import styled from "styled-components";
import { Link } from "react-router-dom";

import { Size } from "./global-types";

export const Image = styled.img<{ $size?: string }>`
  --size: ${(props) => (props.$size !== undefined ? props.$size : "12rem")};

  width: var(--size);
  height: var(--size);

  object-position: center;
  object-fit: cover;

  border-radius: 50%;
  background: var(--color-b3);
  outline: 2px solid var(--color-w3);

  @media (prefers-color-scheme: light) {
    background: var(--color-w3);
    outline: 2px solid var(--color-b3);
  }
`;

export const IconLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;

  height: 1em;
  font-size: 2.5rem;

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

export const SmallError = styled.span`
  color: var(--color-error);
  font-siz: 1rem;

  display: inline-block;
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

export const SmallText = styled(Text)`
  font-size: 1.2rem;
`;

export const Input = styled.input<Size>`
  background: var(--color-b3);
  color: var(--color-w1);
  font-size: 1.2rem;

  width: ${(props) => (props.$width !== undefined ? props.$width : "100%")};
  height: ${(props) => (props.$height !== undefined ? props.$height : "4rem")};
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

export const InputContainer = styled.div`
  margin: 1rem 0;
`;

export const TextArea = styled.textarea<Size>`
  background: var(--color-b3);
  color: var(--color-w1);
  outline: 2px solid var(--color-w3);

  font-size: 1.2rem;
  padding: 0.8rem;
  border-radius: 36px;

  width: ${(props) => (props.$width !== undefined ? props.$width : "100%")};
  height: ${(props) => (props.$height !== undefined ? props.$height : "4rem")};

  &:focus {
    outline: 2px solid var(--color-w1);
  }

  @media (prefers-color-scheme: light) {
    background: var(--color-w3);
    color: var(--color-b1);
    outline: 2px solid var(--color-b3);

    &:focus {
      outline: 3px solid var(--color-b1);
    }
  }
`;

export const BaseDiv = styled.div`
  position: relative;
  border-radius: 36px;
  background: var(--color-b2);

  @media (prefers-color-scheme: light) {
    background: var(--color-w2);
  }
`;

export const MinPage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  @media (max-width: 750px) {
    padding: 6rem 0;
  }
`;
