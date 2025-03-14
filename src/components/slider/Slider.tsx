import React from "react";
import styled from "styled-components";
import iconOfferBrush from "../../assets/images/brush.png";
import iconOfferTShirt from "../../assets/images/t-shirt.png";
import iconOfferBox from "../../assets/images/box.png";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper justify={"space-between"} gap={"30px"}>
                <Slide>
                    <IconOffer src={iconOfferBrush} alt="brush" />
                    <SlideTitle>Branding Design</SlideTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.</Text>
                </Slide>
                <Slide>
                    <IconOffer src={iconOfferTShirt} alt="TShirt" />
                    <SlideTitle>T-Shirt Design</SlideTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.</Text>
                </Slide>
                <Slide>
                    <IconOffer src={iconOfferBox} alt="Box" />
                    <SlideTitle>Package Design</SlideTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.</Text>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 380px;
    height: 380px;
    text-align: center;
    padding: 40px;
    background-color: #FDFDFD;
    margin-bottom: 60px;

    box-shadow: 10px 10px 30px 0px #878787;
`

const IconOffer = styled.img`
    width: 83px;
    height: 83px;
`

const SlideTitle = styled.h3`
    font-weight: 600;
    font-size: 25px;
    line-height: 100%;
    letter-spacing: 1%;
    text-align: center;
    color: #535353;

    margin: 35px 0 12px 0;
`

const Text = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 185%;
    letter-spacing: 1%;
    text-align: center;
    color: #868686;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #E5E5E5;

        & + span {
            margin-left: 8px;
        }

        &.active {
            background-color: ${theme.colors.accent};
        }
    }
`