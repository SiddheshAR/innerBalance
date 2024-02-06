import {styled} from 'styled-components';
import {breakPoints} from '../breakPoints.js';
import {TabHeader,TabTitle,TabDescription} from '../Tabs/Tabs.style.js'

export const ArticlesSection = styled.section`
       margin:2rem 0;
       background-color:#FFF1ED;
       padding:2rem 0;   
`;

export const ArticlesCtn = styled.div`
       width:85%;
       max-width:120rem;
       margin:2rem auto;
       display:flex;
       flex-direction:column;
       gap:14px;
       ${breakPoints.md}{   
              width:75%;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: repeat(3, 1fr);
              grid-column-gap: 30px;
              grid-row-gap: 30px;
       }
`
export const ArticleHeader = styled(TabHeader)`
              width:85%;
              margin:2rem auto;
              >p{
                     font-size:14px;
              }
       ${breakPoints.md}{   
              width:75%;
              max-width:120rem;
              >p{
                     font-size:16px;
              }
       }
`
export const ArticleTitle = styled(TabTitle)`
       margin-bottom:1rem;
`
export const ArticItemsCtn = styled.div`
       padding:1rem;
       border:none;
       border-radius:40px;
       display:flex;
       flex-direction:row;
       gap:20px;
       ${breakPoints.md}{
              padding:1rem;
       }

`;

export const ArticImg = styled.img`
       width:7rem;
       height:7rem;
       border-radius:10px;
       ${breakPoints.md}{
              width:9rem;
              height:9rem;
              margin-top:1rem;
       }
`;

export const ArticDivCtn = styled.div``;

export const ArticTag = styled.p`
       background-color:#F7F7F7;
       display: inline-block;
       color:#657E47;
       font-weight:bold;
       border-radius:10px;
       padding:0.5rem;
       font-size:8px;
       ${breakPoints.md}{
              font-size:14px;
       }
`;

export const ArticHead = styled.h2`
       color:rgb(76, 76, 76);
       text-align:left;
       font-size:1.4rem;
       margin-left:3px;
       margin-top:3px;
       ${breakPoints.lg}{
              font-size:2.4rem;    
       }
       ${breakPoints.md}{
              font-size:1.9rem;    
       }
`;

export const Article1 = styled.div`
       background-color:white;
       border-radius:10px;
       ${breakPoints.md}{
              grid-area: 1 / 1 / 4 / 2;

              >${ArticItemsCtn}{
                     flex-direction:column;
                     margin-bottom:10px;
                     >${ArticImg}{
                            width:98%;
                            margin:auto;
                            height:auto;
                            border-radius:10px;
                            margin-top:4px;

                     }
              }
       }

`

export const Article2 = styled.div`
       background-color:white;
       border-radius:10px;
       ${breakPoints.md}{   
              grid-area: 1 / 2 / 2 / 3;
       }
`;

export const Article3 = styled.div`
       background-color:white;
       border-radius:10px;
       ${breakPoints.md}{   
              grid-area: 2 / 2 / 3 / 3;
       }
`;

export const Article4 = styled.div`
       background-color:white;
       border-radius:10px;
       ${breakPoints.md}{ 
              grid-area: 3 / 2 / 4 / 3;
       }
`;