import styled from 'styled-components';
import {breakPoints} from '../breakPoints.js';

export const ItemContainer = styled.div`
    background-color:#4E6137;
    padding:2rem;
    color:white;
    display:flex;
    flex-direction:column;
    gap: 0.7rem 0rem;
    border-radius:10px;

${breakPoints.md}{
    background-color:#4E6137;
    padding:2rem;
    color:white;
    display:flex;
    flex-direction:column;
    gap: 2rem 0rem;
}

`;

export const ItemCol1 = styled.div`
    display:flex;
    flex-direction:row;
    gap:0rem 1.5rem;
    justify-content:flex-start;
    align-items:center;
`;
export const ItemCol2 = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:1rem;

    ${breakPoints.md}{
    display:flex;
    flex-direction:column;
    gap:1rem 2rem;
    }
`;

export const ItemImg = styled.img`
    height:50px;
    width:50px;

    ${breakPoints.md}{
        height:80px;
    width:80px;
    }
`;

export const ItemTitle = styled.div`
    font-size:22px;
    line-height:32px;
    font-weight:700;
    text-align:left;

`

export const ItemDesc = styled.p`
    font-size:14px;
`

export const ItemMore = styled.a`
    font-size:1.4rem;
    font-weight:600;
    /* text-decoration:underline; */
    color:rgb(243, 180, 161);
    cursor:pointer;
`;

export const ItemHidden = styled.p`
    font-size:1.4rem;
`
