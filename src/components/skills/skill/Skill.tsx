import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type SkillPropsType = {
    title: string
    percent: number
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <ProgressSkill>{props.percent}%</ProgressSkill>
            <ProgressBar max={100} value={props.percent}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 17px;
`

const SkillTitle = styled.h3`
    display: inline;
    margin-top: 20px;
    
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 2.5%;
    color: ${theme.colors.tertiaryBg};
`

const ProgressSkill = styled.span`
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 2.5%;
    color: ${theme.colors.tertiaryBg};
`

const ProgressBar = styled.progress`
    margin-top: 10px;
    max-width: 80vh;
`