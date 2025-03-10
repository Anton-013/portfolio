import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jfif";

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} direction={"column"}>
                <Name>Hello, I’m Lucas Alves</Name>
                <MainTitle>Graphic Designer & Ceo of Graphic Type.</MainTitle>
                <span>I love to provide quality works.</span>
                <button>Get In Touch</button>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    height: 100vh;
    background-image: url(${photo});
    background-size: 130%;
    background-position: 0% 40%;
`

const Name = styled.h2`
    
`

const MainTitle = styled.h1`
    
`