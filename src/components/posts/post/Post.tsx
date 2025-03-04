import React from "react";
import styled from "styled-components";

type PostPropsType = {
    postDate: string
    text: string
}

export const Post = (props: PostPropsType) => {
    return (
        <StyledPost>
            <PostDate>{props.postDate}</PostDate>
            <Text>{props.text}</Text>
            <Link>Read More ↗</Link>
        </StyledPost>
    )
}

const StyledPost = styled.div`
    
`

const PostDate = styled.span`
    
`

const Text = styled.span`
    
`

const Link = styled.a`
    
`