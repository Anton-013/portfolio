import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type WorkPropsType = {
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <BG>
                <Margin />
                <FlexWrapper justify="space-around">
                    <FlexWrapper direction="column" align="flex-start" gap="10px">
                        <Text>Ultra Jot Coffee</Text>
                        <SmallText>Package Design</SmallText>
                    </FlexWrapper>
                    <Icon iconId={"arrowRight"} width={"40px"} height={"40px"} viewBox={"0 0 20px 20px"} />
                </FlexWrapper>
            </BG>
            <Image src={props.src} alt="" />
        </StyledWork>
    )
}

const StyledWork = styled.div`
    max-width: 370px;
    max-height: 350px;
    position: relative;
`

const BG = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover {
        opacity: 1;
    }
`

const Margin = styled.div`
    height: 70%;
`

const Text = styled.span`
    font-weight: 700;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0.5%;
    text-transform: capitalize;
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: capitalize;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`