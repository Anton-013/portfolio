import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
    type: 1 | 2
    text: string
}

export const Button = (props: ButtonPropsType) => {
    if (props.type === 1) {
        return (
            <StyledButtonType1>{props.text}</StyledButtonType1>
        )
    } else {
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
        background-color: ${theme.colors.accent};
        border: none;
        color: ${theme.colors.tertiaryBg};
    }
`

const StyledButtonType2 = styled.button`
    
`