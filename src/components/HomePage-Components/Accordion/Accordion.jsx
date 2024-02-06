import React,{useState} from 'react'

import {AccordionSection,AccordianDiv,AccordianImg,
    AccordContent,AccordContentCtn,AccordContentMain,AccItemTitle,
    AccItemDesc,AccMore,AccMoreContent
} from './Accordian.style.js';

const Accordion = () => {

    const [AccordToggle,setAccordIndex] = useState(null);

    const ContentData = [
        {
           title:"Led & built by mental health experts",
           desc:"Amaha was built by leaders in the mental health field.",
           content:["Our founder and co-founder bring the best of both worlds - strong clinical expertise and decades of experience, combined with a deep understanding of the lived experience of mental health concerns.",
            "Our multidisciplinary team of over 110+ mental health professionals have extensive experience in the field and are highly qualified and trained to support clients with their mental health needs.",
            "We have created proprietary clinical protocols for different conditions, which become the base of all the solutions we offer and enable us to deliver the best possible care to each client."
        ]
        },
        {
            title:"Led & built by mental health experts",
            desc:"Amaha was built by leaders in the mental health field.",
            content:["Our founder and co-founder bring the best of both worlds - strong clinical expertise and decades of experience, combined with a deep understanding of the lived experience of mental health concerns.",
             "Our multidisciplinary team of over 110+ mental health professionals have extensive experience in the field and are highly qualified and trained to support clients with their mental health needs.",
             "We have created proprietary clinical protocols for different conditions, which become the base of all the solutions we offer and enable us to deliver the best possible care to each client."
         ]
         },
         {
            title:"Led & built by mental health experts",
            desc:"Amaha was built by leaders in the mental health field.",
            content:["Our founder and co-founder bring the best of both worlds - strong clinical expertise and decades of experience, combined with a deep understanding of the lived experience of mental health concerns.",
             "Our multidisciplinary team of over 110+ mental health professionals have extensive experience in the field and are highly qualified and trained to support clients with their mental health needs.",
             "We have created proprietary clinical protocols for different conditions, which become the base of all the solutions we offer and enable us to deliver the best possible care to each client."
         ]
         }
        
    ]


    const AccordContentMainBody =({item,index,AccordToggle})=>{
        return(
            <AccordContentMain key={index} index={index} AccordToggle={AccordToggle} onClick={(f)=>{setAccordIndex(index)}} >
                <AccItemTitle>
                {item.title}
                </AccItemTitle>
                <AccItemDesc>
                {item.desc}
                </AccItemDesc>
                <AccMore index={index} accordNum={AccordToggle}>
                    {item.content.map((f)=><AccMoreContent index={index} accordNum={AccordToggle}>{f}</AccMoreContent>)}     
                </AccMore>
            </AccordContentMain>
        )
    }

  return (
    <AccordionSection>
        <AccordianDiv>
            <AccordianImg >

            </AccordianImg>

            <AccordContent>
                <AccordContentCtn>

                    {ContentData.map((e,index)=><AccordContentMainBody  item={e} index={index} AccordToggle={AccordToggle} />)}

                </AccordContentCtn>
            </AccordContent>


        </AccordianDiv>
    </AccordionSection>
  )
}

export default Accordion