import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";

export const Offer = () => {
    return (
        <StyledOffer>
            <SectionTitle>What I Offer</SectionTitle>
            <Text>Things that I can do for my clients. Just make your good trust I love to provide quality works.</Text>
            <Slider />
        </StyledOffer>
    );
};

const StyledOffer = styled.section`
    background-color: #ccbfbf;
    min-height: 50vh;
`

const Text = styled.p`
    
`