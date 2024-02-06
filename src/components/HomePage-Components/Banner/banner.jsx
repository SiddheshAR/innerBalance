import React from 'react'
import {OrangeButton} from '../globalComponents.style.js';
import {BannerSection,BannerContent,BannerImg,BannerTitle,BannerDesc} from './banner.style.js';

const Banner = () => {
  return (
    <BannerSection>

      <BannerContent>
          <BannerTitle>
              Trust InnerBalance with your mental health.
          </BannerTitle>
          <BannerDesc>
          Our mission is simple: to help you feel better, get better and stay better.
<br></br>
<br></br>
We bring together self-care, support from qualified therapists and psychiatrists, as well as community access to deliver the best quality mental healthcare for your needs.
          </BannerDesc>

          <OrangeButton>
            See More
          </OrangeButton>


      </BannerContent>
      <BannerImg>
       
      </BannerImg>
    </BannerSection>
  )
}

export default Banner