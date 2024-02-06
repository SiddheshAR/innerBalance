import {styled} from 'styled-components';
import {breakPoints} from '../breakPoints.js';

export const SupportSection = styled.section`
    background-color:#4E6137;

`;
export const SupportContent = styled.p`
    color:white;
    width:90%;
    margin:auto;
    font-size:1.4rem;
    line-height:20px;
    text-align:center;
    padding:2.2rem 0rem;
    ${breakPoints.lg}{
        font-size:1.2rem;
        width:80%;
        margin:auto;
        padding:1.5rem;
        text-align:center;
    }
`;