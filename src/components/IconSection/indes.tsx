import {
  ContainerIconSection,
  Icon,
  Title,
  Text,
  DesktopIcon,
  StackIcon,
  CheckIcon,
} from "./styles";

interface IconProps {
  title: string;
  text: string;
  icon: "desktop" | "stack" | "check";
}

export function IconSection(props: IconProps) {
  return (
    <ContainerIconSection>
      <Icon>
        {props.icon === "desktop" ? (
          <DesktopIcon />
        ) : props.icon === "stack" ? (
          <StackIcon />
        ) : (
          <CheckIcon />
        )}
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </Icon>
    </ContainerIconSection>
  );
}
