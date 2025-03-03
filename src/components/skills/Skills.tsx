import React from "react";
import { Skill } from "./skill/Skill";
import styled from "styled-components";

export const Skills = () => {
    return (
        <StyledSkills>
            <Skill title={"Adobe Photoshop"} percent={96}/>
            <Skill title={"Adobe Illustrator"} percent={92}/>
            <Skill title={"Adobe After Effect"} percent={85}/>
            <Skill title={"Adobe InDesign"} percent={94}/>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    
`