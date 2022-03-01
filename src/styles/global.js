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
        --color-text-secondary: #80807e;
        --color-alt: #ffbb33;
        --color-secondary: #333;
    }
    html, body, #root {
        background-color: #f8f8f8;
        height: 100%;
        width: 100%;
        font-size: 100%;
        font-family: var(--font-primary);
    }
    main, header, footer {
        padding: 0 3rem;
    }
    main {
        min-height: calc(100% - var(--header-height) * 2 + 6px);
        margin: 3rem 0;
    }
    ul, li {
        list-style: none;
    }
    a { 
        text-decoration: none;
    
    }
`;

export default GlobalStyle;