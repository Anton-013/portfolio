import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type BrendPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string
}

export const Brend = (props: BrendPropsType) => {
    return (
        <StyledBrend>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </StyledBrend>
    )
}

const StyledBrend = styled.div`
    width: 200px;
    height: 200px;
`