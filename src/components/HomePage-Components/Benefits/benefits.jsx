import React from 'react'
import {BenefitsSection,BenefitCtn,BenefitHead,BenefitTitle,BenefitDesc,ItemCtn,ImagesProp,ContentDiv} from './benefits.style.js';
const Benefits = () => {

    const benefit_content = [
        {
            path:'https://cdn.theinnerhour.com/assets/images/homepage/Why-Visual-1.svg',
            title:'Integrated mental healthcare',
            description:'Access self-care tools, community support, and in-person or online therapy and psychiatry services.'
        },
        {
            path:'https://cdn.theinnerhour.com/assets/images/homepage/Why-Visual-2.svg',
            title:'Grounded in science',
            description:'Our mental health care options are based on scientifically proven treatments & clinically validated approaches.'
        },
        {
            path:'https://cdn.theinnerhour.com/assets/images/homepage/Why-Visual-3.svg',
            title:'Personalised support',
            description:'Our treatment plans are tailored to your unique needs, so you can get the right care at the right time.'
        },
        {
            path:'https://cdn.theinnerhour.com/assets/images/homepage/Why-Visual-4.svg',
            title:'Round the clock support',
            description:'Our mental healthcare offerings and services can be accessed from wherever you might be, all 7 days a week.'
        }
    ]

    const BenefitItems = ({path,title,description})=>{

        return(
            <ContentDiv>
                <ImagesProp src={path}></ImagesProp>
                <h2>{title}</h2>
                <BenefitDesc>{description}</BenefitDesc>
            </ContentDiv>       
        )
    }

  return (
    <BenefitsSection>
        <BenefitCtn>
        <BenefitHead>
            <BenefitTitle>Why InnerBalance</BenefitTitle>
            <BenefitDesc>Our platform is built by psychiatrists, therapists and mental health experts with immense global experience.</BenefitDesc>
        </BenefitHead>
        <ItemCtn>
            {benefit_content.map((e,index)=>(<BenefitItems key={index} path={e.path} title ={e.title} description = {e.description} ></BenefitItems>))}
        </ItemCtn>
        </BenefitCtn>
    </BenefitsSection>
  )
}

export default Benefits