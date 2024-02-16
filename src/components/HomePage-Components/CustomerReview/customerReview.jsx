import React,{useState} from 'react'

import {ReviewSection,
    ReviewContent,
    ReviewTitle,
    ReviewDescription,
    ReviewCarousel,
    ArrowButton,
    CarouselContainer,
    CarouselContent,
    ReviewItems,
    BkgReview,
    NextArrows,
    PrevArrows
} from './customerReview.style.js';

import ReviewBackground from "../media/review/reviewBackground.svg";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";


import avatar1 from "../media/review/avatar-1.svg";
import avatar2 from "../media/review/avatar-2.svg";
import avatar3 from "../media/review/avatar-3.svg";
import avatar4 from "../media/review/avatar-4.svg";



const CustomerReview = () => {

    const [currReview,setReview]=useState(1);
    // const [currReview2,setReview2]=useState(2);   
    
    const reviewData = [
        {
            review:"Very helpful, the activities are just the right length, the personal pin feature adds an extra layer of privacy and security which allows me to be and work on myself. It's an important part of my everyday life",
            from:"- Google Playstore Review",
            media:avatar1
        },
        {
            review:"I was sceptical and afraid to be open to another person. I thought I could not do it, but [my therapist] has been very supportive in terms of my mental health journey and just allows me to feel my emotions and simplifies them for me. I trust her completely and know that she will be patient and understanding towards my problems.",
            from:"- Anonymous, Cabin Crew, Delhi",
            media:avatar2
        },
        {
            review:"It's been a wonderful journey. My therapist helped me navigate through my problems to achieve a broad goal of attaining discipline. The app UI is very calming and easy to navigate. Please don't hesitate to seek professional help. It helps when a qualified professional guides you through the steps to solve your problems.",
            from:"- Nishant,Doctor, Bihar",
            media:avatar3
        },
        {
            review:"This app make me feel better and calm when the times where tough. Allie, my happiness buddy gives me activities to feel happy and safe. I will always go to this app when I'm feeling sad, tired or worried and it always helps me. Thank you for creating this app, it helped me a lot",
            from:"- Google Playstore Review",
            media:avatar4
        }
    ]

    const ReviewNext = (currReview)=>{
        if(currReview<(reviewData.length-1)){
            setReview(currReview+1);
        }
        else{
            setReview(0)
        }
    }
    const ReviewPrev = (currReview)=>{
        if(currReview>0){
            setReview(currReview-1);
        }
        else{
            setReview(reviewData.length-1)
        }

    }

  return (
    <ReviewSection>

        <ReviewContent>
            <ReviewTitle>
            We’ve helped<br></br><span> millions</span> feel better.
            </ReviewTitle>
            <ReviewDescription>
            Now it’s your turn to benefit from the ‘Amaha experience’...
            </ReviewDescription>
        </ReviewContent>
        <ReviewCarousel>
    
            <PrevArrows onClick={(e)=>ReviewPrev(currReview)}  />
                <CarouselContainer>
                        <BkgReview src={ReviewBackground} alt=""></BkgReview>
                        <ReviewItems src={reviewData[currReview].media}></ReviewItems>
                        <CarouselContent>{reviewData[currReview].review}
                        <br></br>
                        <br></br>
                        {reviewData[currReview].from}
                        </CarouselContent>
                </CarouselContainer>
            <NextArrows onClick={(e)=>ReviewPrev(currReview)}  />

        </ReviewCarousel>
    </ReviewSection>
  )
}

export default CustomerReview