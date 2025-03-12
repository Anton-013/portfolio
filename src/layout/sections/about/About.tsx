import React from "react";
import styled from "styled-components";
import { Skills } from "../../../components/skills/Skills";
import { SectionAbout } from "../../../components/sectionAbout/SectionAbout";
import { Container } from "../../../components/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionAbout />
                <Skills />
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
`