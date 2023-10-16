import {
  DescriptionImg,
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  DescriptionDiv,
} from "./styles";

interface DescriptionProps {
  img: string;
  title: string;
  text: string;
}

export function Description(props: DescriptionProps) {
  return (
    <DescriptionContainer>
      <DescriptionImg src={props.img} />
      <DescriptionDiv>
        <DescriptionTitle>{props.title}</DescriptionTitle>
        <DescriptionText>{props.text}</DescriptionText>
      </DescriptionDiv>
    </DescriptionContainer>
  );
}
