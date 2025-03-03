import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skills } from "../../../components/skills/Skills";

export const About = () => {
    return (
        <StyledAbout>

            <SectionTitle>About Me</SectionTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate enim pharetra eu.</p>
            <p>Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta eu. Sagittis enim morb. Suspendisse risus.</p>
            <button>hire me</button>
            <button>download cv</button>


            <Skills />
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    min-height: 100vh;
`