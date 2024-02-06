import React from 'react'

import {TabContainer,TabMainCtn,TabHeader,TabTitle,TabDescription,TabItems} from './Tabs.style.js';

import TabItemBlock from './Items.jsx';

const SupportTabs = () => {


    const data = [
        {
            title:"Depression",
            media:"https://cdn.theinnerhour.com/assets/images/homepage/strugglingWith/desktop/depression.svg",
            Description:"Do you feel like your sadness just won't go away, and it is hard to find a way ahead? We can help.",

        },
        {
            title:"Alcohol Addiction",
            media:"https://cdn.theinnerhour.com/assets/images/homepage/strugglingWith/desktop/alcohol-addiction.svg",
            Description:"Is your use of alcohol interfering with your ability to lead your life fully? You can find the right support.",
        },
        {
            title:"Generalised Anxiety Disorder",
            media:"https://cdn.theinnerhour.com/assets/images/homepage/strugglingWith/desktop/anxiety.svg",
            Description:"Do you often feel restless, worried or on-edge? Let us help you on how to cope better.",
        },
        {
            title:"Obsessive Compulsive Disorder",
            media:"https://cdn.theinnerhour.com/assets/images/homepage/strugglingWith/desktop/ocd.svg",
            Description:"Are unwanted thoughts making you anxious and engage in unhelpful behaviours? You can find ways to cope.",
        },
        {
            title:"Bipolar Disorder",
            media:"https://cdn.theinnerhour.com/assets/images/homepage/strugglingWith/desktop/bipolar.svg",
            Description:"Do you struggle with periods of intense happiness, followed by intense sadness? You can find the care you need with us.",
        },
        {
            title:"Adult ADHD",
            media:"https://cdn.theinnerhour.com/assets/images/homepage/strugglingWith/desktop/adhd.svg",
            Description:"Have you always struggled with difficulty focussing, being restless, or impulsivity? There are ways to manage it better.",
        },
    ]

  return (
    <TabContainer>
        <TabMainCtn>
        <TabHeader>
            <TabTitle>What are you struggling with?</TabTitle>
            <TabDescription>InnerBalance is here to support you with all your mental health needs.</TabDescription>
        </TabHeader>
        <TabItems>
            {data.map((e,index)=>{return(<TabItemBlock key={index} data={e} ></TabItemBlock>)})}
        </TabItems>
        </TabMainCtn>
    </TabContainer>
  )
}

export default SupportTabs