import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const MenuPortfolio = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenuPortfolio>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenuPortfolio>
    );
};

const StyledMenuPortfolio = styled.nav`

    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 1%;
    text-align: center;

    margin-bottom: 50px;

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    li + li::before {
        content: " ";
        position: relative;
        display: inline-block;
        background-color: ${theme.colors.fontGrey};
        width: 5px;
        height: 5px;
        top: -3px;
        left: -15px;
    }

    a:hover {
        color: ${theme.colors.accent};
    }

    a {
        color: ${theme.colors.fontGrey};
    }
`