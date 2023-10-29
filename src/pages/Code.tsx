import { useState, MouseEvent } from "react";

import { Form } from "../components/Form/Form";
import { Input, InputContainer, Text } from "../global-css";
import { codeLengths } from "../global-types";

export const Code = () => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleErrors = (): boolean => {
    if (code.length < codeLengths.min) {
      setError("TRY AGAIN.");
      return false;
    }

    return true;
  };

  const sendForm = (event: MouseEvent) => {
    if (!handleErrors()) {
      event.preventDefault();
      return;
    }

    // Send informations to server
  };

  return (
    <Form error={error} link="/account" sendAction={sendForm}>
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
    </Form>
  );
};
