import styled from "styled-components";
import { Desktop } from "@styled-icons/fluentui-system-regular/Desktop";
import { Stack } from "@styled-icons/icomoon/Stack";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";


export const ContainerIconSection = styled.div`
display: flex;
justify-content: space-around;
`

export const Icon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
`

export const Title = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 2px;
`
export const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
`

export const DesktopIcon = styled(Desktop)`
  color: #067afb;
  width: 90px;
`
export const StackIcon = styled(Stack)`
  color: #067afb;
  width: 90px;
`
export const CheckIcon = styled(CheckCircle)`
  color: #067afb;
  width: 90px;
`