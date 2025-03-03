import React from "react";
import styled from "styled-components";
import iconOfferBrush from "../../assets/images/brush.png";
import iconOfferTShirt from "../../assets/images/t-shirt.png";
import iconOfferBox from "../../assets/images/box.png";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
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
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    max-width: 1280px;
`

const Slide = styled.div`
    max-width: 500px;
    text-align: center;
`

const IconOffer = styled.img`
    width: 83px;
    height: 83px;
`

const SlideTitle = styled.h3`
    
`

const Text = styled.p`
    
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 5px;
        border-radius: 50%;
        background-color: red;
    }
`