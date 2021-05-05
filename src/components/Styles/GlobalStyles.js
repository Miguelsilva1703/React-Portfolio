import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        max-width: 100%;
        overflow-x: hidden;
    }



`;

export default GlobalStyle;
