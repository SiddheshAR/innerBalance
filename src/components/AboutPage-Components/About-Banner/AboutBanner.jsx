import React from 'react'
import {AboutSection,AboutBkgImg,AboutContent,AboutDesc} from './AboutBanner.style.js'
import bkgImg from '../media/about_banner.webp';

import { imgBreakPoint } from '../breakPoints.js'

const AboutBanner = () => {
  return (
    <AboutSection>
        <AboutBkgImg>
            <img src={bkgImg} alt='' />
        </AboutBkgImg>
        <AboutContent>
            <h2> About InnerBalance  </h2>
            <AboutDesc>
            Amaha, formerly named InnerHour, is a mental health organisation founded in the year 2016 by renowned psychiatrist and healthcare entrepreneur,
 Dr. Amit Malik.
 <br></br>
 <br></br>
The organisation aims to create a mental health ecosystem that provides treatment and care plans for a range of mental health conditions like anxiety, depression, bipolar disorder, ADHD, OCD, schizophrenia, and addictions.
<br></br>
<br></br>
In 2019, Ms. Neha Kirpal, a social entrepreneur and global mental health ambassador, joined Amaha as Co-founder.
            </AboutDesc>
        </AboutContent>
    </AboutSection>
  )
}

export default AboutBanner