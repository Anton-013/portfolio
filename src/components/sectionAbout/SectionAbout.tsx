import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";

export const SectionAbout = () => {
    return (
        <StyledSectionAbout>
            <SectionTitle>About Me</SectionTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate enim pharetra eu.</p>
            <p>Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta eu. Sagittis enim morb. Suspendisse risus.</p>
            <button>hire me</button>
            <button>download cv</button>
        </StyledSectionAbout>
    );
};

const StyledSectionAbout = styled.div`
    
`