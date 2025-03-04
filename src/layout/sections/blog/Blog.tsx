import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Posts } from "../../../components/posts/Posts";

export const Blog = () => {
    return (
        <StyledBlog>
            <SectionTitle>Blog Posts</SectionTitle>
            <Posts />
            <button>Read All Blogs</button>
        </StyledBlog>
    )
}

const StyledBlog = styled.section`
    
`