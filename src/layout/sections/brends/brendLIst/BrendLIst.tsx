import React from "react";
import styled from "styled-components";
import { Brend } from "../brend/Brend";

const itemsIcon = [
    {
        iconId: "brend01",
        width: "78",
        height: "78",
        viewBox: "0 0 78 78",
    },
    {
        iconId: "brend02",
        width: "60",
        height: "77",
        viewBox: "0 0 60 77",
    },
    {
        iconId: "brend03",
        width: "63",
        height: "72",
        viewBox: "0 0 63 72",
    },
    {
        iconId: "brend04",
        width: "74",
        height: "65",
        viewBox: "0 0 74 65",
    },
    {
        iconId: "brend05",
        width: "65",
        height: "77",
        viewBox: "0 0 65 77",
    },
    {
        iconId: "brend06",
        width: "72",
        height: "73",
        viewBox: "0 0 72 73",
    },
    {
        iconId: "brend07",
        width: "69",
        height: "63",
        viewBox: "0 0 69 63",
    },
    {
        iconId: "brend08",
        width: "68",
        height: "80",
        viewBox: "0 0 68 80",
    },
    {
        iconId: "brend09",
        width: "84",
        height: "71",
        viewBox: "0 0 84 71",
    },
    {
        iconId: "brend10",
        width: "87",
        height: "71",
        viewBox: "0 0 87 71",
    },
    {
        iconId: "brend11",
        width: "56",
        height: "71",
        viewBox: "0 0 56 71",
    },
    {
        iconId: "brend12",
        width: "63",
        height: "72",
        viewBox: "0 0 63 72",
    },
]

export const BrendLIst = () => {
    return (
        <StyledBrendList>
            {itemsIcon.map((i, index) => {
                return (
                    <Brend 
                        iconId={i.iconId}
                        width={i.width}
                        height={i.height}
                        viewBox={i.viewBox}
                        key={index} />
                )
            })}
        </StyledBrendList>
    )
}

const StyledBrendList = styled.div`
    display: flex;
    flex-wrap: wrap;
`