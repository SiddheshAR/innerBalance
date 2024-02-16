
import {
    FooterSection,FooterParent,FooterChild1,FooterChild2
    ,FooterColumn,FooterLinksCtn,FooterLinksTitle,FooterLinkItems,ItemsContainer,FooterAddLinks,
    FooterAppLinks
} from './footer.style.js';

const Footer =()=>{

    const FooterData = [
        {
            title:"About us ",
            links:[
                "Careers",
                "For Therapists",
                "Contact Us",
               "Help/FAQs"]
        },
        {
            title:"SERVICES",
            links:["Therapy",
                "Psychiatry",
                "Couples Therapy",
                "Self-Care",
                "Community",
               " Psychometric Assessments"]
        },{
            title:"Center",
            links:[
                "Mumbai",
                "NCR Delhi",
                "Banglore"
            ]
        },
        {
            title:"PARTNERSHIPS",
            links:["Employee Well-being Programme",
            "Our Approach & Offerings",
            "Our Approach & Offerings",]
        },
        {
            title:"LIBRARY",
            links:["All Resources",
            "Articles",
            "Videos","Assessments"]
        },
        {
            title:"Professionals",
            links:["Therapists",
            "Psychiatrists",
            "Couples Therapists"
            ]
        }
    ]

    return(
        <FooterSection>
            <FooterParent>
                <FooterChild1>  
                    <FooterLinksCtn>
                        {
                            FooterData.map(({title,links})=>(
                                <FooterColumn>
                                    <FooterLinksTitle>{title} </FooterLinksTitle>
                                        <ItemsContainer>
                                        {links.map((i)=><FooterLinkItems>{i}</FooterLinkItems>)}
                                        {/* // links.map((i)=><FooterLinkItems>{i}</FooterLinkItems>); */}
                                        </ItemsContainer>
                                </FooterColumn>                                    
                                ))
                            }
                    </FooterLinksCtn>

                </FooterChild1>

                <FooterChild2>
                        <FooterAddLinks>
                            <h3>InnerBalance</h3>
                            <h3>Privacy Policy</h3>

                            <h3>Terms & Conditions</h3>

                            <h3>Cancellation Policy</h3>
                            <h3>Sitemap</h3>
                            <h3>Hall of Fame</h3>

                        </FooterAddLinks>
                        <p>Amaha does not deal with medical or psychological emergencies. We are not designed to offer support in crisis situations - including when an individual is experiencing thoughts of self-harm or suicide, or is showing symptoms of severe clinical disorders such as schizophrenia and other psychotic conditions. In these cases, in-person medical intervention is the most appropriate form of help.</p>
                        <br></br>
                        <p>
                        If you feel you are experiencing any of these difficulties, we would urge you to seek help at the nearest hospital or emergency room where you can connect with a psychiatrist, social worker, counsellor or therapist in person. We recommend you to involve a close family member or a friend who can offer support.
                        </p>
                        <br></br>
                        <p>
                        You can also reach out to a suicide hotline in your country of residence: 
                        </p>
                </FooterChild2>
            </FooterParent>
        </FooterSection>
    )
}

export default Footer;