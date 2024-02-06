import {styled} from 'styled-components';
import hamburger from '../media/hamburger.png';
import close from '../media/close.png';
import {breakPoints} from '../breakPoints.js';
import { SlArrowDown } from "react-icons/sl";



export const NavbarCtn =styled.div`

    ${breakPoints.lg}{
       padding:0rem 8%;    
    }
    height:6rem;
    border-bottom:1px solid #797F86;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0rem 2rem;
    /* padding: 0px 1.5rem 0 1.5rem; */
`;

export const Navbar = styled.div`

`

export const LogoSection = styled.img`
    width:4rem;
    /* height:3rem; */
`;
export const ToggleButton = styled.img.attrs({
    src:hamburger
})`
    width:2rem;
    opacity:0.6;
    margin:1.4rem;
${breakPoints.lg}{
    display:none;
}
`;
export const CloseButton = styled(ToggleButton).attrs({
    src:close
})``;

export const Navtoggle =styled.div`
    border:green 1px red;
    margin:1rem;
    width:auto;
`;

export const RespNavCtn = styled.div`

/* clip-path: circle(0% at 90% -10%); */
clip-path: ${({toggle})=> toggle?'circle(170% at 50% 0%)':'circle(0% at 90% -10%)'};
    transition: clip-path 0.8s ease;
position:absolute;
width:70%;
background-color:#FFFBF3;
height:700px;
right:0%;
top:100%;
z-index:5;
`
export const NavItems = styled.li`
    padding:2rem;
    font-size:1.7rem;
    cursor:pointer;
    list-style-type: none;


`
export const DownArrow = styled(SlArrowDown)`
    font-size:1rem;
    margin-left:7px;

`

export const MobileNavLists = styled.div`
    padding:1rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    font-weight:600;
    transition: transform 0.3s ease-in-out;

`;

export const NavNest = styled.ul`

    color:#4C4C4C;
    padding:0.7rem 0rem 0.7rem 3rem;
    font-size:1.4rem;
    font-weight:600;
`
export const MobileNavItems=styled.div`
    color:${({items,status})=>(items===status? 'rgb(231, 105, 67);':'#797F86;')};
    transition: color 0.3s ease;
`;

// Desktop Navbar

export const NavbarLg = styled.ul`
    display:none;
    ${breakPoints.lg}{
    display:flex;
    list-style:none;
}

`

export const NavbarLgItems = styled.li`
    color: ${({items,status})=>items===status?`rgb(231, 105, 67)`:'#797F86'};
    margin-left:1.5rem;
    position:relative;
    font-size:1.3rem;
    font-weight:bold;
    text-transform:uppercase;
    cursor:pointer;
`

export const NavDropDown = styled.div`

    position:absolute;
    top:100%;
    padding:2rem 0px 2rem 0px;
    background-color:white;
    width:200px;
    height:auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius:20px;
`;

export const NavDropDownItem = styled.li`
    padding: 1rem 2.5rem;
    color:#797F86;
    &:hover{
        color:rgb(231, 105, 67);
    }
`
