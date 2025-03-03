import React from "react";
import { Skill } from "./skill/Skill";
import styled from "styled-components";

export const Skills = () => {
    return (
        <StyledSkills>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    
`