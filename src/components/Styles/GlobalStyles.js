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

    .vertRow {
    margin: 0;
    position: absolute;
    bottom: 1%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.IconPosTop{
    position: absolute;
    top: 15%;
    right: 10%;
   cursor: pointer;
}

.IconPosbottom{
    position: absolute;
    bottom: 5%;
    right: 11%;
   cursor: pointer;
}

`;

export default GlobalStyle;
