import React from "react";
import styled from "styled-components";
import { Skills } from "../../../components/skills/Skills";
import { SectionAbout } from "../../../components/sectionAbout/SectionAbout";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify={"center"} wrap={"wrap"}>
                    <SectionAbout />
                    <Skills />
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    gap: 100px;
`