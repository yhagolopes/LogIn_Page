import styled from "styled-components";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
  CenterDiv,
  Input,
  Text,
  SmallLink,
  Back,
  Credits,
} from "../global-css";

const Container = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;
`;

const FormContainer = styled(CenterDiv)`
  background: var(--color-b2);

  width: 25rem;
  min-height: 10rem;
  border-radius: 36px;

  padding: 0 1.8rem;

  @media (prefers-color-scheme: light) {
    background: var(--color-w2);
  }
`;

const InputContainer = styled.div`
  margin: 2rem 0;
`;

const Links = styled.div`
  width: 15rem;
`;

const SendButton = styled.button`
  cursor: pointer;
  background: none;
  color: var(--color-w2);
  height: 1em;

  font-size: 1.8rem;

  &:hover {
    color: var(--color-w1);
  }

  &:active {
    outline: 2px solid var(--color-w2);
  }

  @media (prefers-color-scheme: light) {
    color: var(--color-b2);

    &:active {
      color: var(--color-b1);
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  margin: 2rem 0;
`;

type MinMax = {
  min: number;
  max: number;
};

const emailLengths: MinMax = { min: 10, max: 60 };
const passwordLengths: MinMax = { min: 8, max: 14 };
const codeLengths: MinMax = { min: 6, max: 6 };

export const Login = () => {
  const [emailOrNumber, setEmailOrNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const [URLSearchParams] = useSearchParams();
  const forgetPassword = URLSearchParams.get("forget") as string;

  const sendForm = () => {
    // Send informations to server and handle it responses
  };

  return (
    <Container>
      <Back to="#">
        <FaLongArrowAltLeft />
      </Back>
      <FormContainer>
        <InputContainer>
          <Text>
            Email or<br></br>Phone Number
          </Text>
          <Input
            value={emailOrNumber}
            onChange={(event) => {
              const { value } = event.target;

              if (value.length < emailLengths.max) {
                setEmailOrNumber(value);
              }
            }}
          />
        </InputContainer>

        <InputContainer>
          <Text>Password</Text>
          <Input
            type="password"
            value={password}
            onChange={(event) => {
              const { value } = event.target;

              if (value.length < passwordLengths.max) {
                setPassword(value);
              }
            }}
          />
        </InputContainer>

        <Flex>
          <Links>
            <SmallLink to="#">DON'T HAVE AN ACCOUNT?</SmallLink>
            <SmallLink to="?forget=true">FORGET PASSWORD?</SmallLink>
          </Links>

          <SendButton onClick={() => sendForm()}>
            <FaLongArrowAltRight />
          </SendButton>
        </Flex>

        {forgetPassword === "true" ? (
          <InputContainer>
            <Text>Verification Code</Text>
            <Input
              type="number"
              value={code}
              onChange={(event) => {
                const { value } = event.target;

                if (value.length < codeLengths.max) {
                  setCode(value);
                }
              }}
            />
          </InputContainer>
        ) : (
          <></>
        )}
      </FormContainer>

      <Credits>Copyright © 2023 Yhago Lopes</Credits>
    </Container>
  );
};
