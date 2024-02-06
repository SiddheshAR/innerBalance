import {ArticlesSection,ArticleHeader,ArticleTitle,ArticlesCtn,ArticItemsCtn,ArticImg,ArticDivCtn,ArticTag,ArticHead
    ,Article1,Article2,Article3,Article4} from "./articles.style.js";

import {image1,image2,image3,image4} from '../media/articles/index.js';
import {TabTitle,TabDescription} from '../Tabs/Tabs.style.js'
const Articles = ()=>{

    return(
        <ArticlesSection>
            <ArticleHeader>
                <ArticleTitle>Most Read Articles</ArticleTitle>
                <p> Take control of your mental health with our clinically vetted blogs and articles.</p>
            </ArticleHeader>
            <ArticlesCtn>

                    <Article1>
                    <ArticItemsCtn>
                            <ArticImg src={image2}>
                                {/* <img /> */}
                            </ArticImg>
                            <ArticDivCtn>
                                <ArticTag>Adult ADHD</ArticTag>
                                <ArticHead>3 Common Questions About Diagnosis & Treatment For Adult ADHD</ArticHead>
                            </ArticDivCtn>
                        </ArticItemsCtn>
                    </Article1>

                    <Article2>
                        <ArticItemsCtn>
                            <ArticImg src={image4}>
                                {/* <img /> */}
                            </ArticImg>
                            <ArticDivCtn>
                                <ArticTag>Personality</ArticTag>
                                <ArticHead>The Role of Therapy in Managing Personality Disorders</ArticHead>
                            </ArticDivCtn>
                        </ArticItemsCtn>
                    </Article2>

                    <Article3>
                    <ArticItemsCtn>
                            <ArticImg src={image3}>
                                {/* <img /> */}
                            </ArticImg>
                            <ArticDivCtn>
                                <ArticTag>Depression</ArticTag>
                                <ArticHead>Your Productivity Doesn’t Determine Your Worth</ArticHead>
                            </ArticDivCtn>
                        </ArticItemsCtn>
                    </Article3>

                    <Article4>
                    <ArticItemsCtn>
                            <ArticImg src={image1}>
                                {/* <img /> */}
                            </ArticImg>
                            <ArticDivCtn>
                                <ArticTag>General Well Being</ArticTag>
                                <ArticHead>The “Human” Touch in Therapy—Will ChatGPT Replace Therapists?</ArticHead>
                            </ArticDivCtn>
                        </ArticItemsCtn>
                    </Article4>
            </ArticlesCtn>
        </ArticlesSection>
    )
}

export default Articles;