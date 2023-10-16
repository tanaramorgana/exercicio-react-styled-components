import { ContactContainer, Image, Text } from "./styles";

interface ContactProps {
  src: string;
  text: string;
}

export function Contact(props: ContactProps) {
  return (
    <ContactContainer>
      <Image src={props.src} />
      <Text>{props.text}</Text>
    </ContactContainer>
  );
}
