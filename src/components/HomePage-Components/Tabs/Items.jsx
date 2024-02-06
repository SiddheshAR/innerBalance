import {ItemContainer,ItemCol1,ItemCol2,ItemImg,ItemTitle,ItemDesc,ItemMore,ItemHidden} from './Items.style.js'

const TabItemBlock = ({data})=>{



    return(
        <ItemContainer>
            <ItemCol1>
                <ItemImg src={data.media}></ItemImg>
                <ItemTitle>{data.title}</ItemTitle>
            </ItemCol1>
            <ItemCol2>
                <ItemDesc>{data.Description}</ItemDesc>
                <ItemHidden></ItemHidden>
                <ItemMore>Learn More.</ItemMore>
            </ItemCol2>
        </ItemContainer>
    )
}

export default TabItemBlock
