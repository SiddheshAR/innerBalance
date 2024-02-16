import {styled} from 'styled-components';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";
import {breakPoints} from '../breakPoints.js';

export const ReviewSection= styled.section`
    width:90%;
    max-width:120rem;
    /* background:yellow; */
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:3rem 1rem;
    gap:1.5rem;
    ${breakPoints.lg}{
        width:85%;
        max-width:120rem;
        flex-direction:row;
        padding:5rem 3rem;
        
    }

`
export const ReviewContent = styled.div`
    color:#4C4C4C;
    display:flex;
    text-align:center;
    justify-content:center;
    flex-direction:column;
    line-height:1.4;
    gap: 1.5rem;
    ${breakPoints.lg}{
        text-align:left;
    }
`;

export const ReviewTitle = styled.h2`
font-size:3rem;
> span{
    color:#E76943;
}
${breakPoints.lg}{
        font-size:4rem;
    } 
`;

export const ReviewDescription = styled.p`

font-size:1.5rem;
${breakPoints.lg}{
    font-size:1.8rem;
    } 
`;

export const ReviewCarousel = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
gap:1.5rem;

${breakPoints.lg}{

    }

`;

export const ArrowButton = styled.button``;

export const CarouselContainer = styled.div`
    position:relative;
    max-width:45rem;
`;
export const BkgReview = styled.img`
        width:300px;
        height:300px;
    ${breakPoints.lg}{
        width:400px;
        height:400px;
        }   

    `;
    

export const CarouselContent = styled.p`
    font-size:1rem;
    text-align:center;
    position:absolute;
    color:white;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width:80%;
    margin:auto;
    ${breakPoints.lg}{
        font-size:1.5rem; 
        }  
`
export const ReviewItems = styled.img`
        width:50px;
        height:50px;
        position:absolute;
        top:5%;
        left:5%;
    ${breakPoints.lg}{
        width:70px;
        height:70px;
    }  
    
`

export const NextArrows =styled(BsArrowRightCircleFill)`
    color:#4F6238;
    font-size:20px;
    cursor:pointer;
    user-select: none;
    ${breakPoints.lg}{
        font-size:40px;
    } 
    
`

export const PrevArrows =styled(BsArrowLeftCircleFill)`
    color:#4F6238;
    font-size:20px;
    cursor:pointer;
    user-select: none;
    ${breakPoints.lg}{
        font-size:40px;
    } 

`