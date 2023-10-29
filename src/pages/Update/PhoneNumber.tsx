import { useState, MouseEvent } from "react";

import { Form } from "../../components/Form/Form";
import { Input, InputContainer, Text } from "../../global-css";
// I'll modify it later 😅
import { emailLengths } from "../../global-types";

export const PhoneNumber = () => {
  const [error, setError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleErrors = (): boolean => {
    if (phoneNumber.length < emailLengths.min) {
      setError("PHONE NUMBER TOO SMALL.");
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
    <Form error={error} link="/code" sendAction={sendForm}>
      <InputContainer>
        <Text>New Phone Number</Text>
        <Input
          type="text"
          value={phoneNumber}
          onChange={(event) => {
            const { value } = event.target;

            if (value.length < emailLengths.max) {
              setPhoneNumber(value);
            }
          }}
        />
      </InputContainer>
    </Form>
  );
};
