import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Button } from "../Button";
import { FlexWrapper } from "../FlexWrapper";

export const SectionAbout = () => {
    return (
        <StyledSectionAbout>
            <SectionTitle margin={"38px"}>About Me</SectionTitle>
            <TextContainer>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate enim pharetra eu.</Text>
                <Text>Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta eu. Sagittis enim morb. Suspendisse risus.</Text>
            </TextContainer>
            <FlexWrapper gap={"22px"}>
                <Button type={2} text={"hire me"} />
                <Button type={2} text={"download cv"} />
            </FlexWrapper>
        </StyledSectionAbout>
    );
};

const StyledSectionAbout = styled.div`
    max-width: 590px;
    width: 100%;
`

const TextContainer = styled.div`
    margin-bottom: 60px;
    padding-right: 100px;
`

const Text = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 185%;
    letter-spacing: 1%;
    color: #868686;
    margin-bottom: 28px;
`