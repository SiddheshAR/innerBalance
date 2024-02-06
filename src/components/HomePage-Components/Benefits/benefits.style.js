import styled from 'styled-components';
import {breakPoints} from '../breakPoints.js';

export const BenefitsSection = styled.section`
    background-color:#4E6137;
    /* padding-top:4rem; */
    /* padding:4rem 3.7rem 0rem 3.7rem; */
    text-align:center;
    color:white;

${breakPoints.md}{
    /* padding:4rem 6rem 0rem 6rem; */
}
`
export const BenefitCtn = styled.div`
width:80%;
max-width:110rem;
margin:auto;
padding-bottom:4rem;
padding-top:3rem;
`;


export const BenefitHead = styled.div`
    display:flex;
    flex-direction:column;
    gap:1.4rem;
`;

export const BenefitTitle= styled.h2`
    font-size:2.5rem;
`;

export const BenefitDesc = styled.p`
    font-size:1.2rem;
    opacity:0.8;
`;

export const ItemCtn =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:2.5rem 1.5rem;
    padding-top:2rem;

    ${breakPoints.lg}{
        display:flex;
    flex-direction:row;
    }
`;

export const BenefitItems =styled.div`
    display:flex;
    flex-direction:column;
    /* justify-content:center;
    align-items:center; */
    padding-top:1rem;
    gap:2rem;
`;
export const ContentDiv = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.7rem;
    justify-content:center;
    align-items:center;

    > h2{
        font-size:1.8rem;
    }

    `
export const ImagesProp = styled.img`
    width:80px;
    height:80px;
`;
