import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
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
import { Container } from "../../../components/Container";
import { MenuPortfolio } from "../../../components/menu/MenuPortfolio";
import { Button } from "../../../components/Button";

const PortfolioItems = ["All", "Branding", "T-Shirt", "Package", "Poster",]

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Portfolio</SectionTitle>
                    <MenuPortfolio menuItems={PortfolioItems} />
                    <Margin>
                        <FlexWrapper justify="space-around" wrap="wrap" gap="20px">
                            <Work src={workImage01} />
                            <Work src={workImage02} />
                            <Work src={workImage03} />
                            <Work src={workImage04} />
                            <Work src={workImage05} />
                            <Work src={workImage06} />
                            <Work src={workImage07} />
                            <Work src={workImage08} />
                            <Work src={workImage09} />
                        </FlexWrapper>
                    </Margin>
                    <Button type={2} text={"View Portfolio"} />
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
    min-height: 100vh;
    background-color: #fff;
`

const Margin = styled.div`
    margin-bottom: 50px;
`