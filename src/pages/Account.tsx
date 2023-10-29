import styled from "styled-components";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { BsCheckLg } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

import { Label } from "../components/Label/Label";
import { UploadImage } from "../components/UploadImage/UploadImage";
import { Notification } from "../components/Notification/Notification";
import { BaseDiv, TextArea, IconLink, Image } from "../global-css";
import { MinMax } from "../global-types";

const Container = styled(BaseDiv)`
  min-height: 30vh;
  width: 50rem;

  padding: 1.5rem 4rem;

  @media (max-width: 750px) {
    width: 90%;
    padding: 2rem 2rem;
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
  }
`;

const Labels = styled.div`
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const GridLabels = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 0.6fr;
`;

// Bottom styles
const Id = styled.span`
  position: absolute;
  bottom: 10px;
  right: 30px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: end;

  height: 5rem;
`;

const EnableNotifications = styled(IconLink)`
  position: static;
  display: block;
`;

const Check = styled(IconLink)`
  position: static;
  display: block;
`;

// User's Image styles
const ImageContainer = styled.div`
  position: relative;
`;

const UploadAction = styled.div`
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, 0);
`;

// Notifications
const Notifications = styled(BaseDiv)`
  position: fixed;
  bottom: 0;
  right: 4rem;

  width: 15rem;
  height: 24rem;
  border-radius: 20px 20px 0 0;
`;

const addressLengths: MinMax = { min: 0, max: 200 };

export const Account = () => {
  // Can change without verification
  const [image, setImage] = useState<File | undefined>(undefined);
  const [address, setAddress] = useState<string>("Address");
  const [changed, setChanged] = useState<boolean>(false);

  const [URLSearchParams] = useSearchParams();
  const notifications = URLSearchParams.get("notifications") as string;

  return (
    <>
      <Container>
        <TopContainer>
          <ImageContainer>
            <Image
              title="User's image"
              src={image !== undefined ? URL.createObjectURL(image) : ""}
            />
            <UploadAction title="Upload image">
              <UploadImage
                uploaded={image !== undefined}
                uploadCallback={(uploadedImage: File) => {
                  setImage(uploadedImage);
                  setChanged(true);
                }}
                removeCallback={() => setImage(undefined)}
              />
            </UploadAction>
          </ImageContainer>

          <Labels>
            <Label text="Username" />
            <Label text="Phone Number" link="/update/phone" />
          </Labels>
        </TopContainer>

        <TextArea
          value={address}
          onChange={(event) => {
            const { value } = event.target;
            if (value.length < addressLengths.max) {
              setAddress(value);
              setChanged(true);
            }
          }}
          $height="9rem"
        />
        <GridLabels>
          <Label width="auto" text="Email" />
          <Label width="auto" text="Password" link="/update/password" />
        </GridLabels>

        <IconsContainer>
          <EnableNotifications
            to={notifications !== "true" ? "?notifications=true" : "#"}
            title="Show or hide notifications"
          >
            <IoIosNotifications />
          </EnableNotifications>

          {changed === true ? (
            <Check
              title="Save changes"
              to="#"
              onClick={() => {
                setChanged(false);
                setImage(undefined);
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

      {notifications === "true" ? (
        <Notifications>
          <Notification.Root>
            <Notification.Image src="" />
            <Notification.Content link="/" author="Joe" message="Hello Word" />
          </Notification.Root>
        </Notifications>
      ) : (
        <></>
      )}
    </>
  );
};
