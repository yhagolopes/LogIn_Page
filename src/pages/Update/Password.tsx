import { useState, MouseEvent } from "react";

import { Form } from "../../components/Form/Form";
import { Input, InputContainer, Text } from "../../global-css";
import { passwordLengths } from "../../global-types";

export const Password = () => {
  const [error, setError] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const handleErrors = (): boolean => {
    if (newPassword.length < passwordLengths.min) {
      setError("PASSWORD TOO SMALL.");
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
        <Text>Old Password</Text>
        <Input
          type="password"
          value={oldPassword}
          onChange={(event) => {
            const { value } = event.target;

            if (value.length < passwordLengths.max) {
              setOldPassword(value);
            }
          }}
        />
      </InputContainer>

      <InputContainer>
        <Text>New Password</Text>
        <Input
          type="password"
          value={newPassword}
          onChange={(event) => {
            const { value } = event.target;

            if (value.length < passwordLengths.max) {
              setNewPassword(value);
            }
          }}
        />
      </InputContainer>
    </Form>
  );
};
