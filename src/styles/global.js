import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Presets */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }
    :root {
        --font-primary: 'Poppins', sans-serif;
        --header-height: 6rem;
        --color-text: #f8f8f8;
        --color-alt: #ffbb33;
    }
    html, body, #root {
        background-color: #f8f8f8;
        height: 100%;
        width: 100%;
        font-size: 100%;
        font-family: var(--font-primary);
    }
    header, footer {
        padding: 0 3rem;
    }
    main {
        min-height: calc(100% - var(--header-height) * 2 + 6px);
        margin-left: 3rem;
        margin-right: 3rem;
    }
    ul, li {
        list-style: none;
    }
    a { 
        text-decoration: none;
    
    }
`;

export default GlobalStyle;