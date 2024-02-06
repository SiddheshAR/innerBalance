import React,{useState} from 'react'

import {DummyBody,AccordionCtn,AccordionHide} from './Accordion.style.js';


const Accordion = () => {

    const content = [
        {
            "id":"Siddhesh",
           "description":"Lorem ipsom ipaosjd jasj asido ai huahd"
        },
        {
            "id":"Siddhesh",
           "description":"Lorem ipsom ipaosjd jasj asido ai huahd"
        },{
            "id":"Siddhesh",
           "description":"Lorem ipsom ipaosjd jasj asido ai huahd"
        }
]
const [accord,setAccord]=useState();
const ToggleOff=(index,accord)=>{
    if(index===accord){
        setAccord(null);
    }else{
        setAccord(index);
    }
}
console.log(accord);
const AccordionItems = ({index,stateVar,id,description})=>{
    return(
        <>
            <h2>{id}</h2>
            <AccordionHide stateVar={stateVar} index={index} >{description}</AccordionHide>
            <button onClick={(e)=>ToggleOff(index,stateVar)}>Click me</button>
        </>
    )
}

  return (
    <div>

        <DummyBody>
            <AccordionCtn>
                {content.map((e,index)=><AccordionItems stateVar={accord} index={index}  id={e.id} description={e.description}/> )}
            </AccordionCtn>
        </DummyBody>

    </div>
  )
}

export default Accordion