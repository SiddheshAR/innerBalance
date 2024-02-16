import {styled} from 'styled-components';
import {breakPoints} from '../breakPoints.js';
export const TabContainer = styled.section`
background-color:#E9EFE2;
padding-top:4rem;
`;

export const TabMainCtn = styled.div`
width:80%;
max-width:110rem;
margin:auto;
padding-top:3rem;
padding-bottom:3rem;

`;

export const TabHeader = styled.div`
color:#4C4C4C;

`;

export const TabTitle =styled.h2`
font-size:3rem;
margin-bottom:2rem;
`;

export const TabDescription =styled.p`
font-size:1.8rem;
color:black;
opacity:0.9;
/* margin-bottom:2rem; */
`;


export const TabItems = styled.div`
    display:flex;
    margin:4rem 0rem 4rem 0rem;
    flex-direction:column;
    gap:3rem 0rem;

    ${breakPoints.md}{
        margin:4rem 0rem 4rem 0rem;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:1.5rem;
    }

`;

export const TabItem = styled.div``;

