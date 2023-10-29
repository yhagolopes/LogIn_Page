import { useParams } from "react-router-dom";

import { Password } from "./Password";
import { PhoneNumber } from "./PhoneNumber";

export const Update = () => {
  const { label } = useParams();

  if (label === "password") return <Password />;
  if (label === "phone") return <PhoneNumber />;
};
