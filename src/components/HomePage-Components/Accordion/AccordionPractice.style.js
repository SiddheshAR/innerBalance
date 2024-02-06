import {styled} from 'styled-components';
export const DummyBody = styled.section`
width:80%;
height:70%;
border:1px solid green;
margin:auto;
padding:4rem 0 4rem 0;
`

export const AccordionCtn= styled.div`
    width:300px;
    transition: all 0.5s cubic-bezier(0,1,0,1);
`;


export const AccordionHide = styled.p`
    background-color:#808080;
    height:${({index,stateVar})=>stateVar===index?'auto':'0px'};
    overflow:hidden;
    
`