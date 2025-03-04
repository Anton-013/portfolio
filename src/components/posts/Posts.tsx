import React from "react";
import styled from "styled-components";
import { Post } from "./post/Post";

const postList = [
    {
        postDate: "09 Feb",
        text: "Why should we invest more in branding first?",
    },
    {
        postDate: "08 Feb",
        text: "Best rules to follow for achieving business goals",
    },
    {
        postDate: "06 Feb",
        text: "Top 100 most beautiful t-shirt print design",
    },
]

export const Posts = () => {
    return (
        <StyledPosts>
            {postList.map((i, index) => {
                return (
                    <Post
                        key={index}
                        postDate={i.postDate}
                        text={i.text} />
                )
            })}                 
        </StyledPosts>
    )
}

const StyledPosts = styled.div`
    
`

