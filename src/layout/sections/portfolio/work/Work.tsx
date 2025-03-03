import React from "react";
import styled from "styled-components";

type WorkPropsType = {
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: yellow;
    max-width: 410px;
    width: 100%;

`

const Image = styled.img`
    width: 100%;
    height: 358px;
    object-fit: cover;
`