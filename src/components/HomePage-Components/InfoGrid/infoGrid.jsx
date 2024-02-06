
import {
    InfoContainer,
    InfoHeader,
    InfoTitle,
    InfoDesc,
    InfoBody,
    ContentCtn,
    ContentSubCtn,
    ContentImgCtn,
    ContentTitle,
    ContentDesc,
    ContentLink
} from './infoGrid.style.js';

import selfcare from "../media/Info/selfcare.svg";
import community from "../media/Info/community.svg";
import therapy_psy from "../media/Info/therapy_psy.png";          

export const InfoGrid = ()=>{

    let InfoData = [
        {
            title:"Therapy & Psychiatry",
            media:therapy_psy,
            description:"Our in-house team of mental health therapist and psychiatrists is highly qualified and trained to deliver quality and compassionate clinical treatment.",
            description2:"Our team follows proprietary clinical protocols & undergoes peer supervision to ensure each individual gets exceptional care, either online or in person.",
            link:"Get Started",
            left:false
        },
        {
            title:"Self-Care",
            media:selfcare,
            description:"The Amaha app is a digital powerhouse of mental health resources.",
            description2:"Get access to a personalised plan with 600+ tools, activities, articles & daily reminders to make mental healthcare a part of your routine.",
            link:"Download the App",
            left:true
        },
        {
            title:"Community",
            media:community,
            description:"The Amaha Mental Health community is a safe space to share your struggles & get peer support.",
            description2:"Connect with people from across the globe. Remain anonymous (if you prefer) and get ongoing emotional support in a space moderated by trained experts.",
            link:"Join the Community",
            left:false
        },
    ]
    
    const InfoSect = ({data})=>{
        return(
            <ContentCtn contentPosition={data.left} >
                <ContentSubCtn >
                    <ContentTitle>{data.title}</ContentTitle>
                    <ContentDesc>{data.description}</ContentDesc>
                    <ContentDesc>{data.description2}</ContentDesc>
                    <ContentLink>{data.link}</ContentLink>
                </ContentSubCtn>
                <ContentImgCtn src={data.media}>
                    
                </ContentImgCtn>
            </ContentCtn>
        )
    }

    return(
        <InfoContainer>
            <InfoHeader>
                <InfoTitle>Our mental healthcare offerings</InfoTitle>
                <InfoDesc>We are a mental health ecosystem that brings together multiple treatment options to create an experience that makes getting help easy and seamless. From assessment to treatment, we’re with you every step of the way.</InfoDesc>
            </InfoHeader>
            <InfoBody>
                {InfoData.map((e)=>(
                    <InfoSect data={e} ></InfoSect>
                ))}
            </InfoBody>
        </InfoContainer>
        )
}