import {
  Container,
  FacebookIcon,
  FooterContainer,
  InstagramIcon,
  MenuContainer,
  MenuText,
  RightsText,
  SocialMediaContainer,
  TwitterIcon,
} from "./styles";

interface FooterProps {
  text: string[];
  rights: string;
}

export function Footer(props: FooterProps) {
  return (
    <FooterContainer>
      <Container>
        <MenuContainer>
          {props.text.map((item) => {
            return <MenuText>{item}</MenuText>;
          })}
        </MenuContainer>
        <RightsText>{props.rights}</RightsText>
      </Container>

      <SocialMediaContainer>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </SocialMediaContainer>
    </FooterContainer>
  );
}
