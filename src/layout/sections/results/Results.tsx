import React from "react";
import styled from "styled-components";
import { Result } from "../../../components/result/Result";

const resultList = [
    {
        num: "720+",
        text: "Projects Completed",
    },
    {
        num: "920+",
        text: "Products Sold",
    },
    {
        num: "25+",
        text: "Awards Received",
    },
    {
        num: "700+",
        text: "Happy Clients",
    },
]

export const Results = () => {
    return (
        <StyledResults>
            {resultList.map((i, index) => {
                return (
                    <Result
                        key={index}
                        num={i.num}
                        text={i.text} />
                )
            })}
        </StyledResults>
    )
}

const StyledResults = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`