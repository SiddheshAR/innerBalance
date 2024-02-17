import styled from 'styled-components';
import {breakPoints} from '../breakPoints.js';

// InfoSection

export const InfoContainer = styled.section`
    width:85%;
    margin:auto;
    max-width:120rem;
    padding:4rem 0rem 4rem 0rem;
`;

export const InfoHeader= styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    gap:1.5rem;

`;

export const InfoTitle = styled.h2`
font-size:2.5rem;
color:#4C4C4C;
    ${breakPoints.lg}{
        font-size:4rem;
        color:#4C4C4C;
    }
    ${breakPoints.md}{
        font-size:3rem;
        color:#4C4C4C;
    }
`;

export const InfoDesc = styled.p`
font-size:1.3rem;
color:#4C4C4C;
    ${breakPoints.lg}{
        font-size:1.7rem;
        color:#4C4C4C;
    }
`;

export const InfoBody = styled.div`
    padding:3rem 0rem 3rem 0rem;
    display:flex;
    flex-direction:column;
    /* justify-items:center;
    align-content:center; */
    margin:auto;
    max-width:80rem;
`;


// InfoContent.

export const ContentCtn= styled.div`
        
        display:flex;
        /* flex-direction:column-reverse;; */
        flex-direction:column-reverse;
        gap:1.5rem;
        margin-bottom:2rem;
        padding:1rem;
    ${breakPoints.lg}{
        /*  */
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:1.4rem;
        direction: ${(props)=>(props.contentPosition ? "rtl":"ltr")} ;
    }

`;

export const ContentSubCtn= styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:1.4rem;
    text-align:left;
`;

export const ContentTitle = styled.h2`
    font-size:2.7rem;
    color:#4C4C4C;
`;

export const ContentDesc = styled.p`
    font-size:1.5rem;
`;

export const ContentLink = styled.a`
    font-size:1.5rem;
    font-weight:bold;
    color:rgb(231, 105, 67);
    text-decoration:underline;
    cursor:pointer;
`;

export const ContentImgCtn = styled.img``;