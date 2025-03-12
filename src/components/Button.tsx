import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
    type: 1 | 2
    text: string
    botton?: string
}

export const Button = (props: ButtonPropsType) => {
    if (props.type === 1) {
        return (
            <StyledButtonType1>{props.text}</StyledButtonType1>
        )
    } if (props.type === 2) {
        return (
            <StyledButtonType2>{props.text}</StyledButtonType2>
        )
    }
    
}

const StyledButtonType1 = styled.button`
    width: 198px;
    height: 60px;
    color: ${theme.colors.font};
    border: 1px solid ${theme.colors.accent};
    border-radius: 30px;

    &:hover {
        border: none;
        background-color: ${theme.colors.accent};        
        color: ${theme.colors.tertiaryBg};
    }
`

const StyledButtonType2 = styled.button`
    width: 186px;
    height: 56px;
    border: 1px solid #3f3f3f;
    border-radius: 0;

    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 2%;
    text-transform: uppercase;

    &:hover {
        border: none;
        background-color: #3f3f3f;
        color: ${theme.colors.font};
    }
`