import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Offer = () => {
    return (
        <StyledOffer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle margin={"38px"}>What I Offer</SectionTitle>
                    <Text>Things that I can do for my clients. Just make your good trust I love to provide quality works.</Text>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledOffer>
    );
};

const StyledOffer = styled.section`
    background-color: ${theme.colors.secondatyBg};
    min-height: 50vh;
`

const Text = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 185%;
    letter-spacing: 1%;
    color: #868686;
    max-width: 512px;
    margin-bottom: 60px;
`