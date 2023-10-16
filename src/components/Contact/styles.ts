import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 80px;
`;

