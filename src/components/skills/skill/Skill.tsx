import React from "react";
import styled from "styled-components";

type SkillPropsType = {
    title: string
    percent: number
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <ProgressSkill>{props.percent}%</ProgressSkill>
            <progress max={100} value={props.percent}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
`

const SkillTitle = styled.h3`
    display: inline;
`

const ProgressSkill = styled.span`
    
`