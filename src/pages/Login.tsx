import styled from "styled-components";
import { useState, MouseEvent } from "react";

import { FaLongArrowAltRight } from "react-icons/fa";

import {
  BaseDiv,
  Input,
  Text,
  SmallLink,
  IconLink,
  SmallError,
} from "../global-css";
import { emailLengths, passwordLengths } from "../global-types";

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

export const Login = () => {
  const [emailOrNumber, setEmailOrNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleForgetPassword = (event: MouseEvent) => {
    if (emailOrNumber.length < emailLengths.min) {
      event.preventDefault();
      setError("YOU HAVE TO ADD AN EMAIL.");
    }
  };

  const handleErrors = (): boolean => {
    if (emailOrNumber.length < emailLengths.min) {
      setError("EMAIL TOO SMALL");
      return false;
    }

    if (password.length < passwordLengths.min) {
      setError("PASSWORD TOO SMALL.");
      return false;
    }

    return true;
  };

  const sendForm = (event: MouseEvent) => {
    if (!handleErrors()) {
      event.preventDefault();
    }

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
          <SmallLink to="/register" title="Register">
            DON'T HAVE AN ACCOUNT?
          </SmallLink>
          <SmallLink to="/code" title="Recover" onClick={handleForgetPassword}>
            FORGET PASSWORD?
          </SmallLink>

          <SmallError>{error}</SmallError>
        </Links>

        <Access to="/account" title="Login" onClick={sendForm}>
          <FaLongArrowAltRight />
        </Access>
      </Flex>
    </Container>
  );
};
