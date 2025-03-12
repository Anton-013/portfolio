import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jfif";
import { Container } from "../../../components/Container";
import { SocialLIst } from "../../../components/socialList/SocialList";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={"column"}>
                    <Hello>Hello, I’m</Hello>
                    <Name>Lucas Alves</Name>
                    <MainTitle>Graphic Designer & Ceo of Graphic Type.</MainTitle>
                    <Text>I love to provide quality works.</Text>
                    <Button type={1} text={"Get In Touch"}/>
                    <Margin />
                    <SocialLIst/>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    height: 100vh;
    background-image: url(${photo});
    background-size: 130%;
    background-position: 0% 40%;
`

const Hello = styled.span`
    font-weight: 700;
    font-size: 70px;
    line-height: 113%;
    letter-spacing: 2%;

    margin-top: 318px;
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 70px;
    line-height: 113%;
    letter-spacing: 2%;
    color: ${theme.colors.accent};
`

const MainTitle = styled.h1`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 165%;
    letter-spacing: 1%;
    color: ${theme.colors.fontGrey};
`

const Text = styled.span`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 165%;
    letter-spacing: 1%;
    color: ${theme.colors.fontGrey};

    margin-bottom: 54px;
`

const Margin = styled.div`
    margin-top: 200px;
`