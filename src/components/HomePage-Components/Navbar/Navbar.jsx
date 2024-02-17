import React,{useState} from 'react'
import {NavbarCtn,
  LogoSection,
  RespNavCtn,ToggleButton,
  CloseButton,NavItems,
  DownArrow,MobileNavLists,NavNest,MobileNavItems
  ,NavbarLg,NavbarLgItems,NavDropDown,NavDropDownItem
} from './Navbar.style.js';
import logo from '../media/orange.png';

const Navbar = () => {

    const [activeItem,setActiveItem] = useState(null);
    const [toggle,setToggle]=useState(false);

    const handleHover = (itemName)=>{
      if(itemName===activeItem){
        setActiveItem(null);
      }else{
        setActiveItem(itemName);
      }
    }

    const NavData1 = [
      {
        name:"About us",
        sub:["Team","Careers","Contact Us","FAQs"],
        toggle:"about"
      }
      ,{
        name:"Services",
        sub:["Community","Terapy","Conditions"],
        toggle:"services"
      },{
        name:"Experts",
        sub:["Therapy","Psychiatry","Self-Care"],
        toggle:"expert"
      },{
        name:"Resources",
        sub:["All Resources","Articles","Videos","Assesment"],
        toggle:"resources"
      },
    
    ];

    // console.log(toggle);

  return (
    <NavbarCtn>
        <LogoSection src={logo}/>
        <NavbarLg>
          {NavData1.map((e,index)=>(<NavbarLgItems items={activeItem} status={e.toggle} onMouseEnter={()=>handleHover(e.toggle)} 
           onMouseLeave={()=>handleHover(null)}  key={index}>
            <MobileNavLists>{e.name} <DownArrow/></MobileNavLists>
            { activeItem===e.toggle?
            <NavDropDown>{e.sub.map((i)=>(<NavDropDownItem>{i}</NavDropDownItem>))}</NavDropDown>:<></>
            }
          </NavbarLgItems>))}
        </NavbarLg>


        <RespNavCtn toggle={toggle}>
          <NavItems>
              {NavData1.map((e,index)=>(<MobileNavItems key={index} items={activeItem} status={e.toggle}  onClick={() => handleHover(`${e.toggle}`)} > <MobileNavLists> {e.name}  <DownArrow/> </MobileNavLists>
                {activeItem===e.toggle?(<>
                {e.sub.map((f)=>(<NavNest>{f}</NavNest>))}
                </>):<></>}
              </MobileNavItems>))}
          </NavItems>
        </RespNavCtn>

        {toggle?<CloseButton onClick={(e)=>setToggle(!toggle)}/>:<ToggleButton onClick={(e)=>setToggle(!toggle)}/>}

    </NavbarCtn>
  )
}/* display:${({toggle})=>toggle?"block":"none"}; */

export default Navbar