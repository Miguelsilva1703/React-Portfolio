import styled from "styled-components";

export const TechStackSection = styled.section`
    background: #4ca1af; /* fallback for old browsers */
    background: -webkit-linear-gradient(to down, #c4e0e5, #4ca1af); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to down, #c4e0e5, #4ca1af); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin-bottom: 250px;

    min-height: 60vh;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;
