import styled from 'styled-components';
import {breakPoints} from '../breakPoints.js';
import {OrangeButton} from '../globalComponents.style.js';
import bannerImg from '../media/banner.webp';

export const BannerSection = styled.section`
width:85%;
max-width:120rem;
margin:auto;
display:flex;
flex-direction:column-reverse;
justify-content:center;
align-items:center;
row-gap:2rem;
padding:60px 0px;

${breakPoints.lg}{
    /* background-color:yellow; */
    /* flex-direction:row; */
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap:1rem;
    row-gap:4rem;
}
`;

export const BannerContent = styled.div`
/* padding:2.5rem 0px; */
text-align:center;
${breakPoints.lg}{
    display:flex;
    flex-direction:column;
    text-align:left;
    gap:2rem 0rem;
}

`;


export const BannerImg = styled.img.attrs({
    src:bannerImg
})`
width:350px;
padding:2.5rem 0px;
height:370px;

${breakPoints.lg}{
    width:550px;
    height:550px;
}

`;

export const BannerTitle = styled.p`
    font-size:26px;
    font-weight:700;
    color:#4E6137;
    text-align:center;
    margin-bottom:1.6rem;
    ${breakPoints.lg}{
        font-size:39px;
        text-align:left;
    }   
`;

export const BannerDesc = styled.p`

    font-size:16px;
    line-height:20px;

    opacity:0.9;
    text-align:center;
    ${breakPoints.lg}{
        font-size:17px;
        text-align:left;
    }   
`;


