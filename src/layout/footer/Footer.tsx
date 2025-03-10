import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SocialLIst } from "../../components/socialList/SocialList";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"row"} justify={"space-around"} align="center">
                <Copyright>© 2021 Templates Jungle. All rights reserved</Copyright>
                <SocialLIst />
            </FlexWrapper>

        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #dbe5ef;
    min-height: 30vh;
`

const Copyright = styled.small`
    
`
