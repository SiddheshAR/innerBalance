import {styled} from 'styled-components';
import accImg from "../media/accordian/approach-visual.png";
import {breakPoints} from "../breakPoints.js";

export const AccordionSection = styled.section`
    background-color:#E9EFE2;

`;

export const AccordianDiv = styled.div`

    max-width:110rem;
    margin:auto;

    ${breakPoints.lg}{
        padding:2rem 2rem;
        width:70%;
        display:flex;
        flex-direction:row;
        gap: 0px 3rem;
    }
`;

export const AccordianImg = styled.img.attrs(
    {src:accImg}
)`
    width:300px;
    height:300px;
`;
export const AccordContentCtn=styled.div``;

export const AccordContent = styled.div`
    /* background-color:#4E6137; */
    border:1px solid green;
    border-radius:10px;
    padding:2rem;
    /* color:white; */
`;

export const AccordContentMain = styled.div`
padding:1.5rem;
margin:1.5rem;
/* background-color:#4E6137; */
background-color:${({AccordToggle,index})=>(AccordToggle===index?`#4E6137`:"white")};

cursor:pointer;
`;

export const AccItemTitle = styled.h3`
    font-size:2rem;
`;

export const AccItemDesc = styled.p`
    font-size:1.3rem;

`;

export const AccMore = styled.div`
        overflow:hidden;
        transition: all 0.5s cubic-bezier(0,1,0,1);
`;

export const AccMoreContent = styled.div`

    display:block;
    height:${({index,accordNum})=>(index===accordNum?`auto`:`0`)};
    overflow:hidden;
    transition: height 0.5s cubic-bezier(1,0,1,0);
`;