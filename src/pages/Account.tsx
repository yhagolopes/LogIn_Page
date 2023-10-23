import styled from "styled-components";
import { useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

import { Label } from "../components/Label/Label";
import { BaseDiv, TextArea, IconLink, Image } from "../global-css";
import { MinMax } from "../global-types";

const Container = styled(BaseDiv)`
  min-height: 90vh;
  width: 50rem;

  padding: 1.5rem 4rem;

  @media (max-width: 750px) {
    width: 90%;

    padding: 2rem 2rem 8rem 2rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 2rem;

  @media (max-width: 750px) {
    justify-content: center;

    & > div {
      width: 80%;
    }
  }
`;

const MidContainer = styled.div``;

const Id = styled.span`
  position: absolute;
  bottom: 10px;
  right: 30px;
`;

const IconsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  display: flex;
`;

const Notifications = styled(IconLink)`
  position: static;
  display: block;
`;

const Check = styled(IconLink)`
  position: static;
  display: block;
`;

// const imageSizes: MinMax = { min: 0, max: 200 };
const addressSizes: MinMax = { min: 0, max: 200 };

export const Account = () => {
  // Can change without verification
  // const [image, setImage] = useState(false);
  const [address, setAddress] = useState<string>("Address");
  const [changed, setChanged] = useState<boolean>(false);

  return (
    <Container>
      <TopContainer>
        <Image title="User Image" />

        <div>
          <Label text="Username" />
          <Label text="Phone Number" link="#" />
        </div>
      </TopContainer>

      <MidContainer>
        <TextArea
          $height="9rem"
          value={address}
          onChange={(event) => {
            const { value } = event.target;

            if (value.length < addressSizes.max) {
              setAddress(value);
              setChanged(true);
            }
          }}
        />
        <Label text="Email" link="#" />
      </MidContainer>

      <IconsContainer>
        <Notifications to="?notications=true">
          <IoIosNotifications />
        </Notifications>

        {changed === true ? (
          <Check
            to="#"
            onClick={() => {
              setChanged(false);
            }}
          >
            <BsCheckLg />
          </Check>
        ) : (
          <></>
        )}
      </IconsContainer>

      <Id>ID: XXXX</Id>
    </Container>
  );
};
