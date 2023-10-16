import styled from "styled-components";
import { FacebookCircle, Twitter, Instagram } from "@styled-icons/boxicons-logos"

export const FooterContainer = styled.div`
    display: flex;
    padding: 50px;
    justify-content: space-between;
`;
export const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 50px;
`;

export const MenuContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
`;

export const MenuText = styled.p`
    color: #067afb;
    font-weight: bold;
    margin-right: 10px;;
`;

export const RightsText = styled.p`
    font-size: 12px;
    color: gray;
`;

export const SocialMediaContainer = styled.div`
display: flex;
padding-right: 50px;
`;

export const FacebookIcon = styled(FacebookCircle)`
  color: #067afb;
  width: 40px;
  padding-right: 20px;
`;

export const TwitterIcon = styled(Twitter)`
  color: #067afb;
  width: 40px;
  padding-right: 20px;
`;

export const InstagramIcon = styled(Instagram)`
  color: #067afb;
  width: 40px;
`;