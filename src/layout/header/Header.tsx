import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";

const items = ["Home", "About", "Services", "Portfolio", "Store", "Blog", "Contact",]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <LogoHeader>
                        <Name>Lucas </Name>
                        <Surname>Alves</Surname>
                    </LogoHeader>
                    <HeaderMenu menuItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px 80px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
`

const LogoHeader = styled.span`
    font-weight: 400;
    font-size: 44px;
    line-height: 100%;
    letter-spacing: -0.5%;
`

const Name = styled.span`
    font-weight: 700;

    color: ${theme.colors.accent};
`

const Surname = styled.span`
    
`