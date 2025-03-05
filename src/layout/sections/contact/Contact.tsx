import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Let’s work together</SectionTitle>
            <Text>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</Text>
            <button>Contact me</button>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    
`

const Text = styled.p`
    
`