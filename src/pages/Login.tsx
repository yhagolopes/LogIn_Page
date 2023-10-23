import styled from "styled-components";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";

import { BaseDiv, Input, Text, SmallLink, IconLink } from "../global-css";
import { MinMax } from "../global-types";

const Container = styled(BaseDiv)`
  width: 25rem;
  min-height: 10rem;

  padding: 0 1.8rem;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

const InputContainer = styled.div`
  margin: 2rem 0;
`;

const Links = styled.div`
  width: 15rem;
`;

const Access = styled(IconLink)`
  position: static;
  font-size: 2rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  margin: 2rem 0;
`;

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
          <SmallLink to="#" title="Register">
            DON'T HAVE AN ACCOUNT?
          </SmallLink>
          <SmallLink to="?forget=true" title="Recover">
            FORGET PASSWORD?
          </SmallLink>
        </Links>

        <Access to="/account" title="Login" onClick={() => sendForm()}>
          <FaLongArrowAltRight />
        </Access>
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
    </Container>
  );
};
