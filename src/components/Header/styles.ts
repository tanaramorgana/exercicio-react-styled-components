import styled from "styled-components";

export const ImageWithText = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  width: 100%;
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


