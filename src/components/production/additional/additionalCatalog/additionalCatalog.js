import React from "react"
import './additionalCatalog.sass'
import AdditionalItem from "./additionalItem/additionalItem";

const AdditionalCatalog = ({APIArticles}) => {
        let arr = APIArticles.response.items.map(item => <AdditionalItem price={item.price.text} description={item.description} name={item.title} photoSrc={item.thumb_photo}/>)
        return (
            <div className="article__wrapper">
                {arr}
            </div>
        )
    }

export default AdditionalCatalog