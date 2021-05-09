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
    top: 7%;
    right: 10%;
   cursor: pointer;
}

.IconPosbottom{
    position: absolute;
    bottom: 5%;
    right: 11%;
   cursor: pointer;
}

.TechIcons{
    
    background-color: rgb(217, 217, 217, .1);
    height: 250px;
    width: 100vw; 
    border-radius: 10px;

}

.TechTitle{
    
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 4rem;
    h1{
        font-size: 4rem;
        font-weight: 700;
        text-shadow: -1px 2px 6px rgba(118, 150, 150, 1);
    }
}


.TechTop{
    padding-top: 1rem;
    margin-top: 4rem;
    margin-bottom: 3rem;
    margin-left: 1rem;
}

.TechBottom{
    margin-left: 1rem;
}



    .TechStackItem{
        display: flex;
        flex-direction: column;
        font-weight: 700;
        align-items: center;
    }

`;

export default GlobalStyle;
