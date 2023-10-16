import { ImageWithText, Image, Text } from "./styles";

interface HeaderProps {
  src: string;
  text: string;
}

export function Header(props: HeaderProps) {
  return (
    <ImageWithText>
      <Image src={props.src} />
      <Text>{props.text}</Text>
    </ImageWithText>
  );
}
