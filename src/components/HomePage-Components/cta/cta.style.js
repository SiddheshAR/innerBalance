import {styled} from 'styled-components';
import ctaImg from '../media/cta/help-visual.png';
import {breakPoints} from '../breakPoints.js'; 

export const CtaSection = styled.section`
    display:flex;
    flex-direction:column-reverse;
    align-items:center;
    width:95%;
    margin:3rem auto;
    max-width:110rem;


    ${breakPoints.lg}{
    display:flex;
    flex-direction:row;
    gap:5rem;
    width:85%;
    /* align-items:left; */
    margin:3rem auto;
    }
`;

export const CtaContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1.5rem;
    padding:1rem 0rem;

    ${breakPoints.lg}{
        align-items:initial;

        }

`;

export const CtaImage = styled.img.attrs({src:ctaImg})`
        width:240px;
        height:240px; 
        ${breakPoints.lg}{
        width:300px;
        height:300px;    
        }
`;

export const CtaTitle = styled.h2`
    color:#4C4C4C;
    font-size:2rem;
    text-align:center;    
    ${breakPoints.lg}{
        font-size:3rem;
        text-align:left;  
        }
`;

export const CtaDescription = styled.p`
    font-size: 1.4rem;
    line-height: 24px;
    opacity: 1;
    font-weight: 500;
    color: rgb(76, 76, 76);
    text-align: center;
    margin: 0px;
    padding: 0px;
    ${breakPoints.lg}{
        font-size: 1.4rem;
        text-align:left;
    }
`;

export const CtaButton = styled.button`
    background-color: rgb(231, 105, 67);
    color:white;
    padding: 1rem 1.7rem;
    font-weight: bold;
    border-radius: 2rem;
    border: 1px solid rgb(231, 105, 67);
    overflow: hidden;
    letter-spacing: 0.08rem;
    cursor: pointer;
    text-transform: uppercase;
    width: fit-content;
    /* max-width:17rem; */
    font-size:1rem;
`