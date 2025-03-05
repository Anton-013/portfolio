import React from "react";
import styled from "styled-components";

type ResultPropsType = {
    num: string
    text: string
}

export const Result = (props: ResultPropsType) => {
    return (
        <StyledResult>
            <ResultNumber>{props.num}</ResultNumber>
            <ResultText>{props.text}</ResultText>
        </StyledResult>
    )
}

const StyledResult = styled.div`
    display: flex;
    flex-direction: column;
`

const ResultNumber = styled.span`
    
`

const ResultText = styled.span`
    
`