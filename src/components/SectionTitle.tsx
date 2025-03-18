import styled from "styled-components";
import { theme } from "../styles/Theme";

type SectionTitlePropsType = {
    color?: string
    margin?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: ${props => props.color} ${theme.colors.tertiaryBg};
    font-weight: 600;
    font-size: 60px;
    line-height: 100%;
    letter-spacing: 0%;
    margin-bottom: ${props => props.margin};
`