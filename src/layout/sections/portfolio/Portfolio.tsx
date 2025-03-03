import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import workImage01 from "../../../assets/images/portfolio-01.jfif";
import workImage02 from "../../../assets/images/portfolio-02.jfif";
import workImage03 from "../../../assets/images/portfolio-03.jfif";
import workImage04 from "../../../assets/images/portfolio-04.jfif";
import workImage05 from "../../../assets/images/portfolio-05.jfif";
import workImage06 from "../../../assets/images/portfolio-06.jfif";
import workImage07 from "../../../assets/images/portfolio-07.jfif";
import workImage08 from "../../../assets/images/portfolio-08.jfif";
import workImage09 from "../../../assets/images/portfolio-09.jfif";

const PortfolioItems = ["All", "Branding", "T-Shirt", "Package", "Poster",]

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle>Portfolio</SectionTitle>
            <Menu menuItems={PortfolioItems} />
            <FlexWrapper justify="space-around" wrap="wrap">
                <Work src={workImage01}/>
                <Work src={workImage02}/>
                <Work src={workImage03}/>
                <Work src={workImage04}/>
                <Work src={workImage05}/>
                <Work src={workImage06}/>
                <Work src={workImage07}/>
                <Work src={workImage08}/>
                <Work src={workImage09}/>
            </FlexWrapper>
            <button>View Portfolio</button>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
    min-height: 100vh;
    background-color: #519adb;
`