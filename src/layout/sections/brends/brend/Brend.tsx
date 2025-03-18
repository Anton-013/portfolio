import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type BrendPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string
    fill?: string
}

export const Brend = (props: BrendPropsType) => {
    return (
        <StyledBrend>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill || "#c5c5c5"} />
        </StyledBrend>
    )
}

const StyledBrend = styled.div`
    width: 190px;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
`