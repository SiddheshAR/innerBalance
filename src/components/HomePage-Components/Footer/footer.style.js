import {styled} from 'styled-components';
import{breakPoints} from '../breakPoints.js';

export const FooterSection = styled.section`
    background-color:#FAFAFA;   
`;

export const FooterParent = styled.div`
    padding:2rem 0rem;
    width:84%;
    max-width:120rem;
    margin:auto;
    
    /* border:green 1px solid;  */
`;

export const FooterChild1 = styled.div``;
export const FooterAllLinks =styled.div``;
export const FooterLinksCtn = styled.div`
    /* display:flex;
    flex-wrap:wrap; */
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:2rem 2rem;
    ${breakPoints.lg}{
        grid-template-columns:1fr 1fr 1fr;
        gap:2rem 5rem;
    }
`;
export const FooterLinksTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.16rem;
    text-transform: uppercase;
    color: rgb(165, 165, 165);  
    ${breakPoints.lg}{
        font-size: 1rem;
    }
`;
export const FooterLinkItems = styled.li`
    list-style:none;
    font-size:1.3rem;
    line-height: 20px;
    opacity: 1;
    font-weight: 600;
    color: rgb(76, 76, 76);
    cursor:pointer;
    ${breakPoints.lg}{
        font-size:1.1rem;
    }
    
`;
export const ItemsContainer = styled.div`
    display:flex;

    flex-direction:column;
`
export const FooterAppLinks = styled.div``;

export const FooterChild2 =styled.div`
margin-top:4rem;
    line-height: 16px;
    opacity: 1;
    font-weight: 500;
    color: rgb(165, 165, 165);
    text-align: left;
    font-size:1.2rem;
`;
export const FooterAddLinks = styled.div`
    padding:1rem 0px;
    cursor:pointer;
    display:flex;   
    flex-direction:column;
    gap:1.5rem;
    >h3 {
        font-size:1rem;
    }
    ${breakPoints.lg}{
        flex-direction:row;
    }
    ${breakPoints.md}{
        flex-direction:row;
    }

`;

export const FooterColumn = styled.div`
    font-size:1.6rem;
`;