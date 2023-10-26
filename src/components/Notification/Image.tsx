import { Image as GImage } from "../../global-css";

interface IImage {
  src: string;
}
export const Image = ({ src }: IImage) => {
  return <GImage src={src} $size="3.2rem" />;
};
