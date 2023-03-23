import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin : 0;
        padding : 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background-color: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.primaryDark};
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }

    .vertical-timeline-element-content {
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25), 0 0.4rem 1.25rem 0 rgba(0, 0, 0, 0.1) !important;
        padding: 2rem 3rem !important;

`;