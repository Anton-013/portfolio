import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo-comment.jfif";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SliderReview>
                <Review>
                    <FlexWrapper>
                        <BlockImg>
                            <Photo src={photo} alt="" />
                        </BlockImg>
                        <BlockText>
                            <Text>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor. Sit faucibus placerat at nisl posuere aliquet amet pharetra suspendisse risus.”</Text>
                            <Name>Emma Brown</Name>
                            <TitleBar>CEO - Squirrel Sweets</TitleBar>
                        </BlockText>
                    </FlexWrapper>
                    <Pagination>
                        <span>⭠</span>
                        <span>⭢</span>
                    </Pagination>
                </Review>
            </SliderReview>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    background-color: aqua;
`

const SliderReview = styled.div`
    
`

const Review = styled.div`

`

const BlockImg = styled.div`

`

const Photo = styled.img`
    max-width: 590px;
    max-height: 360px;
`

const BlockText = styled.div`
    
`

const Text = styled.p`
    
`

const Name = styled.span`
    
`

const TitleBar = styled.span`
    
`

const Pagination = styled.div`
    
`