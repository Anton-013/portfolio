import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 1;
        scale: 0;
    }

    &:hover {
        &::before {
            scale: 1;
        };
    }
`

const Link = styled.a`
    font-family: "Source Sans 3", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    color: ${theme.colors.font};

    &:hover {
        color: ${theme.colors.font};
    }
`