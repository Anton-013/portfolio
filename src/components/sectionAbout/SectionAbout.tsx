import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Button } from "../Button";

export const SectionAbout = () => {
    return (
        <StyledSectionAbout>
            <SectionTitle>About Me</SectionTitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate enim pharetra eu.</Text>
            <Text>Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta eu. Sagittis enim morb. Suspendisse risus.</Text>
            <Button type={2} text={"hire me"} />
            <Button type={2} text={"download cv"} />
        </StyledSectionAbout>
    );
};

const StyledSectionAbout = styled.div`
    
`

const Text = styled.p`
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    line-height: 185%;
    letter-spacing: 1%;
    color: #868686;
`