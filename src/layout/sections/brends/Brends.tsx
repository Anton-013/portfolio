import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { BrendLIst } from "./brendLIst/BrendLIst";



export const Brends = () => {
    return (
        <StyledBrends>
            <SectionTitle>Brands I’ve Worked</SectionTitle>
            <Text>Things that I can do for my clients. Just make your good trust I love to provide quality works.</Text>
            <BrendLIst />
        </StyledBrends>
    );
};

const StyledBrends = styled.section`
    
`

const Text = styled.p`
    
`


