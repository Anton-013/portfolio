import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Source Sans 3", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section + section {
        padding: 150px 0;
    }

    

    svg:hover {
        fill: ${theme.colors.accent};
        stroke: ${theme.colors.accent};
        transform: translateY(-2px);
        scale: 1.3;
    }

    progress {
        border: 0px solid grey;
        width: 630px;
        height: 5px;
    }
    progress::-webkit-progress-bar {
        background-color: #EAEAEA;
    }
    progress::-webkit-progress-value {
        background-color: ${theme.colors.accent};
    }
`