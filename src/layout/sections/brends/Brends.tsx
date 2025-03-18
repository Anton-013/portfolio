import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { BrendLIst } from "./brendLIst/BrendLIst";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";



export const Brends = () => {
    return (
        <StyledBrends>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle color="#FFF" margin="14px">Brands I’ve Worked</SectionTitle>
                    <Text>Things that I can do for my clients. Just make your good trust I love to provide quality works.</Text>
                    <BrendLIst />
                </FlexWrapper>
            </Container>
        </StyledBrends>
    );
};

const StyledBrends = styled.section`
    background-color: ${theme.colors.tertiaryBg};
`

const Text = styled.p`
    margin-bottom: 60px;
`


