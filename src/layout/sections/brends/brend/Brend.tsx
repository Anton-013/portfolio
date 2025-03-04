import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

export const Brend = () => {
    return (
        <StyledBrend>
            <Icon iconId="brend01" width="78" height="78" viewBox="0 0 78 78"/>
        </StyledBrend>
    )
}

const StyledBrend = styled.div`
    width: 200px;
    height: 200px;
`