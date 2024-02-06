import {styled} from 'styled-components';
// import bkgImg from '../media/about_banner.webp';
import {breakPoints} from '../breakPoints';

export const AboutSection = styled.section`

`
export const AboutBkgImg = styled.picture`
    > img {
        width:100%;
        position:relative;
        height: 90vh;
		object-fit: cover;
		object-position: top center;
		max-height: 120rem;
    }
    ${breakPoints.md}{
        >img{
            height: 85vh;
        }
    }
`
export const AboutContent = styled.div`
    position:absolute;
    top:20%;
    left:10%;
    > h2 {
        font-size:28px;
        color:white;
    }
    ${breakPoints.md}{
        left:15%;
    }
`
export const AboutDesc = styled.div`
    margin-top:1.5rem;
    color:white;
    font-size:16px;
    text-align:left;
    width:80%;
    ${breakPoints.md}{
        font-size:16px;
        width:50%;
    }
    ${breakPoints.lg}{
        font-size:20px;
        width:50%;
    }
`