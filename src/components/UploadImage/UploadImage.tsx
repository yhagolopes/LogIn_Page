import styled from "styled-components";
import { useRef } from "react";

import { BsArrowUp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { MinMax } from "../../global-types";

const Label = styled.label``;

// input needs to be hidden
const Input = styled.input`
  display: none;
`;

const Icon = styled.span<{ $size: string }>`
  height: 1em;

  font-size: ${(props) => props.$size};
  cursor: pointer;
`;

// JPG and PNG
const supportedFormats: string = "image/png, image/jpg";
// Mb to Byte
const imageSizes: MinMax = { min: 0, max: 5000000 };

interface IImage {
  size?: string;
  uploaded?: boolean;
  uploadCallback: (uploadedImage: File) => void;
  removeCallback: () => void;
}
export const UploadImage = ({
  size = "1.5rem",
  uploaded,
  uploadCallback,
  removeCallback,
}: IImage) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getFile = () => {
    const input = inputRef.current;
    if (input === null) {
      return;
    }

    const { files } = input;
    if (files !== null && files.length > 0 && files[0].size < imageSizes.max) {
      uploadCallback(files[0]);
    }
  };

  const resetInput = () => {
    const input = inputRef.current;
    if (input !== null) {
      input.value = "";
      removeCallback();
    }
  };

  return (
    <Label>
      <Input
        ref={inputRef}
        type="file"
        accept={supportedFormats}
        onChange={getFile}
      />
      <Icon $size={size} onClick={resetInput}>
        {uploaded === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <BsArrowUp></BsArrowUp>
        )}
      </Icon>
    </Label>
  );
};
