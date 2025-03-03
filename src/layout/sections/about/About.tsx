import React from "react";
import styled from "styled-components";
import { Skills } from "../../../components/skills/Skills";
import { SectionAbout } from "../../../components/sectionAbout/SectionAbout";

export const About = () => {
    return (
        <StyledAbout>
            <SectionAbout />
            <Skills />
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    min-height: 100vh;
`