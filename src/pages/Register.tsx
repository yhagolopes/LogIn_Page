import { useState, MouseEvent } from "react";

import { Form } from "../components/Form/Form";
import { Input, InputContainer, Text } from "../global-css";
import { emailLengths, passwordLengths } from "../global-types";

export const Register = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const [error, setError] = useState<string>("");

  // Handle erros and show it to user
  const handleErrors = (): boolean => {
    if (email.length < emailLengths.min) {
      setError("EMAIL TOO SMALL.");
      return false;
    }
    if (password.length < passwordLengths.min) {
      setError("PASSWORD TOO SMALL.");
      return false;
    }

    if (password !== password2) {
      setError("PASSWORDS NOT EQUAL.");
      return false;
    }

    return true;
  };

  const sendForm = (event: MouseEvent) => {
    if (!handleErrors()) {
      event.preventDefault();
    }

    // Send informations to server
  };

  return (
    <Form error={error} link="/code" sendAction={sendForm}>
      <InputContainer>
        <Text>Email</Text>
        <Input
          type="email"
          value={email}
          onChange={(event) => {
            const { value } = event.target;

            if (value.length < emailLengths.max) {
              setEmail(value);
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

      <InputContainer>
        <Text>Password Again</Text>
        <Input
          type="password"
          value={password2}
          onChange={(event) => {
            const { value } = event.target;

            if (value.length < passwordLengths.max) {
              setPassword2(value);
            }
          }}
        />
      </InputContainer>
    </Form>
  );
};
